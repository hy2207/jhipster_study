package org.jhipster.blog.web.rest;

import org.jhipster.blog.JhipsterStudyApp;
import org.jhipster.blog.domain.NewCommer;
import org.jhipster.blog.repository.NewCommerRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.jhipster.blog.domain.enumeration.Member;
import org.jhipster.blog.domain.enumeration.Gender;
import org.jhipster.blog.domain.enumeration.BaptismValue;
import org.jhipster.blog.domain.enumeration.VisaStatus;
import org.jhipster.blog.domain.enumeration.Duty;
/**
 * Integration tests for the {@link NewCommerResource} REST controller.
 */
@SpringBootTest(classes = JhipsterStudyApp.class)
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser
public class NewCommerResourceIT {

    private static final Member DEFAULT_ISMEMBER = Member.Yes;
    private static final Member UPDATED_ISMEMBER = Member.No;

    private static final String DEFAULT_KOREAN_NAME = "AAAAAAAAAA";
    private static final String UPDATED_KOREAN_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_ENGLISH_NAME = "AAAAAAAAAA";
    private static final String UPDATED_ENGLISH_NAME = "BBBBBBBBBB";

    private static final Instant DEFAULT_BIRTH_DAY = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_BIRTH_DAY = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final Gender DEFAULT_GENDER = Gender.MALE;
    private static final Gender UPDATED_GENDER = Gender.FEMALE;

    private static final String DEFAULT_ADDRESS = "AAAAAAAAAA";
    private static final String UPDATED_ADDRESS = "BBBBBBBBBB";

    private static final String DEFAULT_CITY = "AAAAAAAAAA";
    private static final String UPDATED_CITY = "BBBBBBBBBB";

    private static final String DEFAULT_PROVINCE = "AAAAAAAAAA";
    private static final String UPDATED_PROVINCE = "BBBBBBBBBB";

    private static final String DEFAULT_POSTAL_CODE = "AAAAAAAAAA";
    private static final String UPDATED_POSTAL_CODE = "BBBBBBBBBB";

    private static final String DEFAULT_PHONE_NUMBER = "AAAAAAAAAA";
    private static final String UPDATED_PHONE_NUMBER = "BBBBBBBBBB";

    private static final String DEFAULT_EMAIL = "AAAAAAAAAA";
    private static final String UPDATED_EMAIL = "BBBBBBBBBB";

    private static final String DEFAULT_JOB = "AAAAAAAAAA";
    private static final String UPDATED_JOB = "BBBBBBBBBB";

    private static final String DEFAULT_COMPANY = "AAAAAAAAAA";
    private static final String UPDATED_COMPANY = "BBBBBBBBBB";

    private static final String DEFAULT_CAR_NUMBER = "AAAAAAAAAA";
    private static final String UPDATED_CAR_NUMBER = "BBBBBBBBBB";

    private static final BaptismValue DEFAULT_BAPTISM_TYPE = BaptismValue.None;
    private static final BaptismValue UPDATED_BAPTISM_TYPE = BaptismValue.Infant;

    private static final String DEFAULT_BAPTISM_CHURCH = "AAAAAAAAAA";
    private static final String UPDATED_BAPTISM_CHURCH = "BBBBBBBBBB";

    private static final Integer DEFAULT_BAPTISM_YEAR = 1;
    private static final Integer UPDATED_BAPTISM_YEAR = 2;

    private static final VisaStatus DEFAULT_VISA_STATUS = VisaStatus.Permenant;
    private static final VisaStatus UPDATED_VISA_STATUS = VisaStatus.Resident;

    private static final Duty DEFAULT_DUTY = Duty.General;
    private static final Duty UPDATED_DUTY = Duty.Servant;

    private static final String DEFAULT_PREVIOUS_CHURCH = "AAAAAAAAAA";
    private static final String UPDATED_PREVIOUS_CHURCH = "BBBBBBBBBB";

    private static final String DEFAULT_INTRODUCER = "AAAAAAAAAA";
    private static final String UPDATED_INTRODUCER = "BBBBBBBBBB";

    @Autowired
    private NewCommerRepository newCommerRepository;

    @Mock
    private NewCommerRepository newCommerRepositoryMock;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restNewCommerMockMvc;

    private NewCommer newCommer;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static NewCommer createEntity(EntityManager em) {
        NewCommer newCommer = new NewCommer()
            .ismember(DEFAULT_ISMEMBER)
            .koreanName(DEFAULT_KOREAN_NAME)
            .englishName(DEFAULT_ENGLISH_NAME)
            .birthDay(DEFAULT_BIRTH_DAY)
            .gender(DEFAULT_GENDER)
            .address(DEFAULT_ADDRESS)
            .city(DEFAULT_CITY)
            .province(DEFAULT_PROVINCE)
            .postalCode(DEFAULT_POSTAL_CODE)
            .phoneNumber(DEFAULT_PHONE_NUMBER)
            .email(DEFAULT_EMAIL)
            .job(DEFAULT_JOB)
            .company(DEFAULT_COMPANY)
            .carNumber(DEFAULT_CAR_NUMBER)
            .baptismType(DEFAULT_BAPTISM_TYPE)
            .baptismChurch(DEFAULT_BAPTISM_CHURCH)
            .baptismYear(DEFAULT_BAPTISM_YEAR)
            .visaStatus(DEFAULT_VISA_STATUS)
            .duty(DEFAULT_DUTY)
            .previousChurch(DEFAULT_PREVIOUS_CHURCH)
            .introducer(DEFAULT_INTRODUCER);
        return newCommer;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static NewCommer createUpdatedEntity(EntityManager em) {
        NewCommer newCommer = new NewCommer()
            .ismember(UPDATED_ISMEMBER)
            .koreanName(UPDATED_KOREAN_NAME)
            .englishName(UPDATED_ENGLISH_NAME)
            .birthDay(UPDATED_BIRTH_DAY)
            .gender(UPDATED_GENDER)
            .address(UPDATED_ADDRESS)
            .city(UPDATED_CITY)
            .province(UPDATED_PROVINCE)
            .postalCode(UPDATED_POSTAL_CODE)
            .phoneNumber(UPDATED_PHONE_NUMBER)
            .email(UPDATED_EMAIL)
            .job(UPDATED_JOB)
            .company(UPDATED_COMPANY)
            .carNumber(UPDATED_CAR_NUMBER)
            .baptismType(UPDATED_BAPTISM_TYPE)
            .baptismChurch(UPDATED_BAPTISM_CHURCH)
            .baptismYear(UPDATED_BAPTISM_YEAR)
            .visaStatus(UPDATED_VISA_STATUS)
            .duty(UPDATED_DUTY)
            .previousChurch(UPDATED_PREVIOUS_CHURCH)
            .introducer(UPDATED_INTRODUCER);
        return newCommer;
    }

    @BeforeEach
    public void initTest() {
        newCommer = createEntity(em);
    }

    @Test
    @Transactional
    public void createNewCommer() throws Exception {
        int databaseSizeBeforeCreate = newCommerRepository.findAll().size();
        // Create the NewCommer
        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isCreated());

        // Validate the NewCommer in the database
        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeCreate + 1);
        NewCommer testNewCommer = newCommerList.get(newCommerList.size() - 1);
        assertThat(testNewCommer.getIsmember()).isEqualTo(DEFAULT_ISMEMBER);
        assertThat(testNewCommer.getKoreanName()).isEqualTo(DEFAULT_KOREAN_NAME);
        assertThat(testNewCommer.getEnglishName()).isEqualTo(DEFAULT_ENGLISH_NAME);
        assertThat(testNewCommer.getBirthDay()).isEqualTo(DEFAULT_BIRTH_DAY);
        assertThat(testNewCommer.getGender()).isEqualTo(DEFAULT_GENDER);
        assertThat(testNewCommer.getAddress()).isEqualTo(DEFAULT_ADDRESS);
        assertThat(testNewCommer.getCity()).isEqualTo(DEFAULT_CITY);
        assertThat(testNewCommer.getProvince()).isEqualTo(DEFAULT_PROVINCE);
        assertThat(testNewCommer.getPostalCode()).isEqualTo(DEFAULT_POSTAL_CODE);
        assertThat(testNewCommer.getPhoneNumber()).isEqualTo(DEFAULT_PHONE_NUMBER);
        assertThat(testNewCommer.getEmail()).isEqualTo(DEFAULT_EMAIL);
        assertThat(testNewCommer.getJob()).isEqualTo(DEFAULT_JOB);
        assertThat(testNewCommer.getCompany()).isEqualTo(DEFAULT_COMPANY);
        assertThat(testNewCommer.getCarNumber()).isEqualTo(DEFAULT_CAR_NUMBER);
        assertThat(testNewCommer.getBaptismType()).isEqualTo(DEFAULT_BAPTISM_TYPE);
        assertThat(testNewCommer.getBaptismChurch()).isEqualTo(DEFAULT_BAPTISM_CHURCH);
        assertThat(testNewCommer.getBaptismYear()).isEqualTo(DEFAULT_BAPTISM_YEAR);
        assertThat(testNewCommer.getVisaStatus()).isEqualTo(DEFAULT_VISA_STATUS);
        assertThat(testNewCommer.getDuty()).isEqualTo(DEFAULT_DUTY);
        assertThat(testNewCommer.getPreviousChurch()).isEqualTo(DEFAULT_PREVIOUS_CHURCH);
        assertThat(testNewCommer.getIntroducer()).isEqualTo(DEFAULT_INTRODUCER);
    }

    @Test
    @Transactional
    public void createNewCommerWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = newCommerRepository.findAll().size();

        // Create the NewCommer with an existing ID
        newCommer.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        // Validate the NewCommer in the database
        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void checkKoreanNameIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setKoreanName(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkEnglishNameIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setEnglishName(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkBirthDayIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setBirthDay(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkGenderIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setGender(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkAddressIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setAddress(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkCityIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setCity(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkProvinceIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setProvince(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkPostalCodeIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setPostalCode(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkPhoneNumberIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setPhoneNumber(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkEmailIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setEmail(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkJobIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setJob(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkCompanyIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setCompany(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkCarNumberIsRequired() throws Exception {
        int databaseSizeBeforeTest = newCommerRepository.findAll().size();
        // set the field null
        newCommer.setCarNumber(null);

        // Create the NewCommer, which fails.


        restNewCommerMockMvc.perform(post("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllNewCommers() throws Exception {
        // Initialize the database
        newCommerRepository.saveAndFlush(newCommer);

        // Get all the newCommerList
        restNewCommerMockMvc.perform(get("/api/new-commers?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(newCommer.getId().intValue())))
            .andExpect(jsonPath("$.[*].ismember").value(hasItem(DEFAULT_ISMEMBER.toString())))
            .andExpect(jsonPath("$.[*].koreanName").value(hasItem(DEFAULT_KOREAN_NAME)))
            .andExpect(jsonPath("$.[*].englishName").value(hasItem(DEFAULT_ENGLISH_NAME)))
            .andExpect(jsonPath("$.[*].birthDay").value(hasItem(DEFAULT_BIRTH_DAY.toString())))
            .andExpect(jsonPath("$.[*].gender").value(hasItem(DEFAULT_GENDER.toString())))
            .andExpect(jsonPath("$.[*].address").value(hasItem(DEFAULT_ADDRESS)))
            .andExpect(jsonPath("$.[*].city").value(hasItem(DEFAULT_CITY)))
            .andExpect(jsonPath("$.[*].province").value(hasItem(DEFAULT_PROVINCE)))
            .andExpect(jsonPath("$.[*].postalCode").value(hasItem(DEFAULT_POSTAL_CODE)))
            .andExpect(jsonPath("$.[*].phoneNumber").value(hasItem(DEFAULT_PHONE_NUMBER)))
            .andExpect(jsonPath("$.[*].email").value(hasItem(DEFAULT_EMAIL)))
            .andExpect(jsonPath("$.[*].job").value(hasItem(DEFAULT_JOB)))
            .andExpect(jsonPath("$.[*].company").value(hasItem(DEFAULT_COMPANY)))
            .andExpect(jsonPath("$.[*].carNumber").value(hasItem(DEFAULT_CAR_NUMBER)))
            .andExpect(jsonPath("$.[*].baptismType").value(hasItem(DEFAULT_BAPTISM_TYPE.toString())))
            .andExpect(jsonPath("$.[*].baptismChurch").value(hasItem(DEFAULT_BAPTISM_CHURCH)))
            .andExpect(jsonPath("$.[*].baptismYear").value(hasItem(DEFAULT_BAPTISM_YEAR)))
            .andExpect(jsonPath("$.[*].visaStatus").value(hasItem(DEFAULT_VISA_STATUS.toString())))
            .andExpect(jsonPath("$.[*].duty").value(hasItem(DEFAULT_DUTY.toString())))
            .andExpect(jsonPath("$.[*].previousChurch").value(hasItem(DEFAULT_PREVIOUS_CHURCH)))
            .andExpect(jsonPath("$.[*].introducer").value(hasItem(DEFAULT_INTRODUCER)));
    }
    
    @SuppressWarnings({"unchecked"})
    public void getAllNewCommersWithEagerRelationshipsIsEnabled() throws Exception {
        when(newCommerRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        restNewCommerMockMvc.perform(get("/api/new-commers?eagerload=true"))
            .andExpect(status().isOk());

        verify(newCommerRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({"unchecked"})
    public void getAllNewCommersWithEagerRelationshipsIsNotEnabled() throws Exception {
        when(newCommerRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        restNewCommerMockMvc.perform(get("/api/new-commers?eagerload=true"))
            .andExpect(status().isOk());

        verify(newCommerRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @Test
    @Transactional
    public void getNewCommer() throws Exception {
        // Initialize the database
        newCommerRepository.saveAndFlush(newCommer);

        // Get the newCommer
        restNewCommerMockMvc.perform(get("/api/new-commers/{id}", newCommer.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(newCommer.getId().intValue()))
            .andExpect(jsonPath("$.ismember").value(DEFAULT_ISMEMBER.toString()))
            .andExpect(jsonPath("$.koreanName").value(DEFAULT_KOREAN_NAME))
            .andExpect(jsonPath("$.englishName").value(DEFAULT_ENGLISH_NAME))
            .andExpect(jsonPath("$.birthDay").value(DEFAULT_BIRTH_DAY.toString()))
            .andExpect(jsonPath("$.gender").value(DEFAULT_GENDER.toString()))
            .andExpect(jsonPath("$.address").value(DEFAULT_ADDRESS))
            .andExpect(jsonPath("$.city").value(DEFAULT_CITY))
            .andExpect(jsonPath("$.province").value(DEFAULT_PROVINCE))
            .andExpect(jsonPath("$.postalCode").value(DEFAULT_POSTAL_CODE))
            .andExpect(jsonPath("$.phoneNumber").value(DEFAULT_PHONE_NUMBER))
            .andExpect(jsonPath("$.email").value(DEFAULT_EMAIL))
            .andExpect(jsonPath("$.job").value(DEFAULT_JOB))
            .andExpect(jsonPath("$.company").value(DEFAULT_COMPANY))
            .andExpect(jsonPath("$.carNumber").value(DEFAULT_CAR_NUMBER))
            .andExpect(jsonPath("$.baptismType").value(DEFAULT_BAPTISM_TYPE.toString()))
            .andExpect(jsonPath("$.baptismChurch").value(DEFAULT_BAPTISM_CHURCH))
            .andExpect(jsonPath("$.baptismYear").value(DEFAULT_BAPTISM_YEAR))
            .andExpect(jsonPath("$.visaStatus").value(DEFAULT_VISA_STATUS.toString()))
            .andExpect(jsonPath("$.duty").value(DEFAULT_DUTY.toString()))
            .andExpect(jsonPath("$.previousChurch").value(DEFAULT_PREVIOUS_CHURCH))
            .andExpect(jsonPath("$.introducer").value(DEFAULT_INTRODUCER));
    }
    @Test
    @Transactional
    public void getNonExistingNewCommer() throws Exception {
        // Get the newCommer
        restNewCommerMockMvc.perform(get("/api/new-commers/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateNewCommer() throws Exception {
        // Initialize the database
        newCommerRepository.saveAndFlush(newCommer);

        int databaseSizeBeforeUpdate = newCommerRepository.findAll().size();

        // Update the newCommer
        NewCommer updatedNewCommer = newCommerRepository.findById(newCommer.getId()).get();
        // Disconnect from session so that the updates on updatedNewCommer are not directly saved in db
        em.detach(updatedNewCommer);
        updatedNewCommer
            .ismember(UPDATED_ISMEMBER)
            .koreanName(UPDATED_KOREAN_NAME)
            .englishName(UPDATED_ENGLISH_NAME)
            .birthDay(UPDATED_BIRTH_DAY)
            .gender(UPDATED_GENDER)
            .address(UPDATED_ADDRESS)
            .city(UPDATED_CITY)
            .province(UPDATED_PROVINCE)
            .postalCode(UPDATED_POSTAL_CODE)
            .phoneNumber(UPDATED_PHONE_NUMBER)
            .email(UPDATED_EMAIL)
            .job(UPDATED_JOB)
            .company(UPDATED_COMPANY)
            .carNumber(UPDATED_CAR_NUMBER)
            .baptismType(UPDATED_BAPTISM_TYPE)
            .baptismChurch(UPDATED_BAPTISM_CHURCH)
            .baptismYear(UPDATED_BAPTISM_YEAR)
            .visaStatus(UPDATED_VISA_STATUS)
            .duty(UPDATED_DUTY)
            .previousChurch(UPDATED_PREVIOUS_CHURCH)
            .introducer(UPDATED_INTRODUCER);

        restNewCommerMockMvc.perform(put("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedNewCommer)))
            .andExpect(status().isOk());

        // Validate the NewCommer in the database
        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeUpdate);
        NewCommer testNewCommer = newCommerList.get(newCommerList.size() - 1);
        assertThat(testNewCommer.getIsmember()).isEqualTo(UPDATED_ISMEMBER);
        assertThat(testNewCommer.getKoreanName()).isEqualTo(UPDATED_KOREAN_NAME);
        assertThat(testNewCommer.getEnglishName()).isEqualTo(UPDATED_ENGLISH_NAME);
        assertThat(testNewCommer.getBirthDay()).isEqualTo(UPDATED_BIRTH_DAY);
        assertThat(testNewCommer.getGender()).isEqualTo(UPDATED_GENDER);
        assertThat(testNewCommer.getAddress()).isEqualTo(UPDATED_ADDRESS);
        assertThat(testNewCommer.getCity()).isEqualTo(UPDATED_CITY);
        assertThat(testNewCommer.getProvince()).isEqualTo(UPDATED_PROVINCE);
        assertThat(testNewCommer.getPostalCode()).isEqualTo(UPDATED_POSTAL_CODE);
        assertThat(testNewCommer.getPhoneNumber()).isEqualTo(UPDATED_PHONE_NUMBER);
        assertThat(testNewCommer.getEmail()).isEqualTo(UPDATED_EMAIL);
        assertThat(testNewCommer.getJob()).isEqualTo(UPDATED_JOB);
        assertThat(testNewCommer.getCompany()).isEqualTo(UPDATED_COMPANY);
        assertThat(testNewCommer.getCarNumber()).isEqualTo(UPDATED_CAR_NUMBER);
        assertThat(testNewCommer.getBaptismType()).isEqualTo(UPDATED_BAPTISM_TYPE);
        assertThat(testNewCommer.getBaptismChurch()).isEqualTo(UPDATED_BAPTISM_CHURCH);
        assertThat(testNewCommer.getBaptismYear()).isEqualTo(UPDATED_BAPTISM_YEAR);
        assertThat(testNewCommer.getVisaStatus()).isEqualTo(UPDATED_VISA_STATUS);
        assertThat(testNewCommer.getDuty()).isEqualTo(UPDATED_DUTY);
        assertThat(testNewCommer.getPreviousChurch()).isEqualTo(UPDATED_PREVIOUS_CHURCH);
        assertThat(testNewCommer.getIntroducer()).isEqualTo(UPDATED_INTRODUCER);
    }

    @Test
    @Transactional
    public void updateNonExistingNewCommer() throws Exception {
        int databaseSizeBeforeUpdate = newCommerRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restNewCommerMockMvc.perform(put("/api/new-commers")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(newCommer)))
            .andExpect(status().isBadRequest());

        // Validate the NewCommer in the database
        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteNewCommer() throws Exception {
        // Initialize the database
        newCommerRepository.saveAndFlush(newCommer);

        int databaseSizeBeforeDelete = newCommerRepository.findAll().size();

        // Delete the newCommer
        restNewCommerMockMvc.perform(delete("/api/new-commers/{id}", newCommer.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<NewCommer> newCommerList = newCommerRepository.findAll();
        assertThat(newCommerList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
