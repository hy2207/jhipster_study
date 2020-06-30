package org.jhipster.blog.web.rest;

import org.jhipster.blog.domain.ServiceValue;
import org.jhipster.blog.repository.ServiceValueRepository;
import org.jhipster.blog.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link org.jhipster.blog.domain.ServiceValue}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ServiceValueResource {

    private final Logger log = LoggerFactory.getLogger(ServiceValueResource.class);

    private static final String ENTITY_NAME = "serviceValue";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ServiceValueRepository serviceValueRepository;

    public ServiceValueResource(ServiceValueRepository serviceValueRepository) {
        this.serviceValueRepository = serviceValueRepository;
    }

    /**
     * {@code POST  /service-values} : Create a new serviceValue.
     *
     * @param serviceValue the serviceValue to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new serviceValue, or with status {@code 400 (Bad Request)} if the serviceValue has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/service-values")
    public ResponseEntity<ServiceValue> createServiceValue(@RequestBody ServiceValue serviceValue) throws URISyntaxException {
        log.debug("REST request to save ServiceValue : {}", serviceValue);
        if (serviceValue.getId() != null) {
            throw new BadRequestAlertException("A new serviceValue cannot already have an ID", ENTITY_NAME, "idexists");
        }
        ServiceValue result = serviceValueRepository.save(serviceValue);
        return ResponseEntity.created(new URI("/api/service-values/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /service-values} : Updates an existing serviceValue.
     *
     * @param serviceValue the serviceValue to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated serviceValue,
     * or with status {@code 400 (Bad Request)} if the serviceValue is not valid,
     * or with status {@code 500 (Internal Server Error)} if the serviceValue couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/service-values")
    public ResponseEntity<ServiceValue> updateServiceValue(@RequestBody ServiceValue serviceValue) throws URISyntaxException {
        log.debug("REST request to update ServiceValue : {}", serviceValue);
        if (serviceValue.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        ServiceValue result = serviceValueRepository.save(serviceValue);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, serviceValue.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /service-values} : get all the serviceValues.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of serviceValues in body.
     */
    @GetMapping("/service-values")
    public List<ServiceValue> getAllServiceValues() {
        log.debug("REST request to get all ServiceValues");
        return serviceValueRepository.findAll();
    }

    /**
     * {@code GET  /service-values/:id} : get the "id" serviceValue.
     *
     * @param id the id of the serviceValue to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the serviceValue, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/service-values/{id}")
    public ResponseEntity<ServiceValue> getServiceValue(@PathVariable Long id) {
        log.debug("REST request to get ServiceValue : {}", id);
        Optional<ServiceValue> serviceValue = serviceValueRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(serviceValue);
    }

    /**
     * {@code DELETE  /service-values/:id} : delete the "id" serviceValue.
     *
     * @param id the id of the serviceValue to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/service-values/{id}")
    public ResponseEntity<Void> deleteServiceValue(@PathVariable Long id) {
        log.debug("REST request to delete ServiceValue : {}", id);
        serviceValueRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
