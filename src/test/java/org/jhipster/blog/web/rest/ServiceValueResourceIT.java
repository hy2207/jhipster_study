package org.jhipster.blog.web.rest;

import org.jhipster.blog.JhipsterStudyApp;
import org.jhipster.blog.domain.ServiceValue;
import org.jhipster.blog.repository.ServiceValueRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.jhipster.blog.domain.enumeration.ServiceTitle;
/**
 * Integration tests for the {@link ServiceValueResource} REST controller.
 */
@SpringBootTest(classes = JhipsterStudyApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class ServiceValueResourceIT {

    private static final ServiceTitle DEFAULT_SERVICE_EXPERIENCE = ServiceTitle.Design;
    private static final ServiceTitle UPDATED_SERVICE_EXPERIENCE = ServiceTitle.Ministry;

    @Autowired
    private ServiceValueRepository serviceValueRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restServiceValueMockMvc;

    private ServiceValue serviceValue;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static ServiceValue createEntity(EntityManager em) {
        ServiceValue serviceValue = new ServiceValue()
            .serviceExperience(DEFAULT_SERVICE_EXPERIENCE);
        return serviceValue;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static ServiceValue createUpdatedEntity(EntityManager em) {
        ServiceValue serviceValue = new ServiceValue()
            .serviceExperience(UPDATED_SERVICE_EXPERIENCE);
        return serviceValue;
    }

    @BeforeEach
    public void initTest() {
        serviceValue = createEntity(em);
    }

    @Test
    @Transactional
    public void createServiceValue() throws Exception {
        int databaseSizeBeforeCreate = serviceValueRepository.findAll().size();
        // Create the ServiceValue
        restServiceValueMockMvc.perform(post("/api/service-values")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(serviceValue)))
            .andExpect(status().isCreated());

        // Validate the ServiceValue in the database
        List<ServiceValue> serviceValueList = serviceValueRepository.findAll();
        assertThat(serviceValueList).hasSize(databaseSizeBeforeCreate + 1);
        ServiceValue testServiceValue = serviceValueList.get(serviceValueList.size() - 1);
        assertThat(testServiceValue.getServiceExperience()).isEqualTo(DEFAULT_SERVICE_EXPERIENCE);
    }

    @Test
    @Transactional
    public void createServiceValueWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = serviceValueRepository.findAll().size();

        // Create the ServiceValue with an existing ID
        serviceValue.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restServiceValueMockMvc.perform(post("/api/service-values")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(serviceValue)))
            .andExpect(status().isBadRequest());

        // Validate the ServiceValue in the database
        List<ServiceValue> serviceValueList = serviceValueRepository.findAll();
        assertThat(serviceValueList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllServiceValues() throws Exception {
        // Initialize the database
        serviceValueRepository.saveAndFlush(serviceValue);

        // Get all the serviceValueList
        restServiceValueMockMvc.perform(get("/api/service-values?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(serviceValue.getId().intValue())))
            .andExpect(jsonPath("$.[*].serviceExperience").value(hasItem(DEFAULT_SERVICE_EXPERIENCE.toString())));
    }
    
    @Test
    @Transactional
    public void getServiceValue() throws Exception {
        // Initialize the database
        serviceValueRepository.saveAndFlush(serviceValue);

        // Get the serviceValue
        restServiceValueMockMvc.perform(get("/api/service-values/{id}", serviceValue.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(serviceValue.getId().intValue()))
            .andExpect(jsonPath("$.serviceExperience").value(DEFAULT_SERVICE_EXPERIENCE.toString()));
    }
    @Test
    @Transactional
    public void getNonExistingServiceValue() throws Exception {
        // Get the serviceValue
        restServiceValueMockMvc.perform(get("/api/service-values/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateServiceValue() throws Exception {
        // Initialize the database
        serviceValueRepository.saveAndFlush(serviceValue);

        int databaseSizeBeforeUpdate = serviceValueRepository.findAll().size();

        // Update the serviceValue
        ServiceValue updatedServiceValue = serviceValueRepository.findById(serviceValue.getId()).get();
        // Disconnect from session so that the updates on updatedServiceValue are not directly saved in db
        em.detach(updatedServiceValue);
        updatedServiceValue
            .serviceExperience(UPDATED_SERVICE_EXPERIENCE);

        restServiceValueMockMvc.perform(put("/api/service-values")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedServiceValue)))
            .andExpect(status().isOk());

        // Validate the ServiceValue in the database
        List<ServiceValue> serviceValueList = serviceValueRepository.findAll();
        assertThat(serviceValueList).hasSize(databaseSizeBeforeUpdate);
        ServiceValue testServiceValue = serviceValueList.get(serviceValueList.size() - 1);
        assertThat(testServiceValue.getServiceExperience()).isEqualTo(UPDATED_SERVICE_EXPERIENCE);
    }

    @Test
    @Transactional
    public void updateNonExistingServiceValue() throws Exception {
        int databaseSizeBeforeUpdate = serviceValueRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restServiceValueMockMvc.perform(put("/api/service-values")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(serviceValue)))
            .andExpect(status().isBadRequest());

        // Validate the ServiceValue in the database
        List<ServiceValue> serviceValueList = serviceValueRepository.findAll();
        assertThat(serviceValueList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteServiceValue() throws Exception {
        // Initialize the database
        serviceValueRepository.saveAndFlush(serviceValue);

        int databaseSizeBeforeDelete = serviceValueRepository.findAll().size();

        // Delete the serviceValue
        restServiceValueMockMvc.perform(delete("/api/service-values/{id}", serviceValue.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<ServiceValue> serviceValueList = serviceValueRepository.findAll();
        assertThat(serviceValueList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
