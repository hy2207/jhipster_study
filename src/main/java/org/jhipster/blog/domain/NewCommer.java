package org.jhipster.blog.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

import org.jhipster.blog.domain.enumeration.Member;

import org.jhipster.blog.domain.enumeration.Gender;

import org.jhipster.blog.domain.enumeration.BaptismValue;

import org.jhipster.blog.domain.enumeration.VisaStatus;

import org.jhipster.blog.domain.enumeration.Duty;

/**
 * A NewCommer.
 */
@Entity
@Table(name = "new_commer")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class NewCommer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "ismember")
    private Member ismember;

    @NotNull
    @Column(name = "korean_name", nullable = false)
    private String koreanName;

    @NotNull
    @Column(name = "english_name", nullable = false)
    private String englishName;

    @NotNull
    @Column(name = "birth_day", nullable = false)
    private Instant birthDay;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "gender", nullable = false)
    private Gender gender;

    @NotNull
    @Column(name = "address", nullable = false)
    private String address;

    @NotNull
    @Column(name = "city", nullable = false)
    private String city;

    @NotNull
    @Column(name = "province", nullable = false)
    private String province;

    @NotNull
    @Column(name = "postal_code", nullable = false)
    private String postalCode;

    @NotNull
    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @NotNull
    @Column(name = "email", nullable = false)
    private String email;

    @NotNull
    @Column(name = "job", nullable = false)
    private String job;

    @NotNull
    @Column(name = "company", nullable = false)
    private String company;

    @NotNull
    @Column(name = "car_number", nullable = false)
    private String carNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "baptism_type")
    private BaptismValue baptismType;

    @Column(name = "baptism_church")
    private String baptismChurch;

    @Column(name = "baptism_year")
    private Integer baptismYear;

    @Enumerated(EnumType.STRING)
    @Column(name = "visa_status")
    private VisaStatus visaStatus;

    @Enumerated(EnumType.STRING)
    @Column(name = "duty")
    private Duty duty;

    @Column(name = "previous_church")
    private String previousChurch;

    @Column(name = "introducer")
    private String introducer;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JoinTable(name = "new_commer_servicevalue",
               joinColumns = @JoinColumn(name = "new_commer_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "servicevalue_id", referencedColumnName = "id"))
    private Set<ServiceValue> servicevalues = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Member getIsmember() {
        return ismember;
    }

    public NewCommer ismember(Member ismember) {
        this.ismember = ismember;
        return this;
    }

    public void setIsmember(Member ismember) {
        this.ismember = ismember;
    }

    public String getKoreanName() {
        return koreanName;
    }

    public NewCommer koreanName(String koreanName) {
        this.koreanName = koreanName;
        return this;
    }

    public void setKoreanName(String koreanName) {
        this.koreanName = koreanName;
    }

    public String getEnglishName() {
        return englishName;
    }

    public NewCommer englishName(String englishName) {
        this.englishName = englishName;
        return this;
    }

    public void setEnglishName(String englishName) {
        this.englishName = englishName;
    }

    public Instant getBirthDay() {
        return birthDay;
    }

    public NewCommer birthDay(Instant birthDay) {
        this.birthDay = birthDay;
        return this;
    }

    public void setBirthDay(Instant birthDay) {
        this.birthDay = birthDay;
    }

    public Gender getGender() {
        return gender;
    }

    public NewCommer gender(Gender gender) {
        this.gender = gender;
        return this;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public NewCommer address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public NewCommer city(String city) {
        this.city = city;
        return this;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public NewCommer province(String province) {
        this.province = province;
        return this;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public NewCommer postalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public NewCommer phoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public NewCommer email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJob() {
        return job;
    }

    public NewCommer job(String job) {
        this.job = job;
        return this;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getCompany() {
        return company;
    }

    public NewCommer company(String company) {
        this.company = company;
        return this;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getCarNumber() {
        return carNumber;
    }

    public NewCommer carNumber(String carNumber) {
        this.carNumber = carNumber;
        return this;
    }

    public void setCarNumber(String carNumber) {
        this.carNumber = carNumber;
    }

    public BaptismValue getBaptismType() {
        return baptismType;
    }

    public NewCommer baptismType(BaptismValue baptismType) {
        this.baptismType = baptismType;
        return this;
    }

    public void setBaptismType(BaptismValue baptismType) {
        this.baptismType = baptismType;
    }

    public String getBaptismChurch() {
        return baptismChurch;
    }

    public NewCommer baptismChurch(String baptismChurch) {
        this.baptismChurch = baptismChurch;
        return this;
    }

    public void setBaptismChurch(String baptismChurch) {
        this.baptismChurch = baptismChurch;
    }

    public Integer getBaptismYear() {
        return baptismYear;
    }

    public NewCommer baptismYear(Integer baptismYear) {
        this.baptismYear = baptismYear;
        return this;
    }

    public void setBaptismYear(Integer baptismYear) {
        this.baptismYear = baptismYear;
    }

    public VisaStatus getVisaStatus() {
        return visaStatus;
    }

    public NewCommer visaStatus(VisaStatus visaStatus) {
        this.visaStatus = visaStatus;
        return this;
    }

    public void setVisaStatus(VisaStatus visaStatus) {
        this.visaStatus = visaStatus;
    }

    public Duty getDuty() {
        return duty;
    }

    public NewCommer duty(Duty duty) {
        this.duty = duty;
        return this;
    }

    public void setDuty(Duty duty) {
        this.duty = duty;
    }

    public String getPreviousChurch() {
        return previousChurch;
    }

    public NewCommer previousChurch(String previousChurch) {
        this.previousChurch = previousChurch;
        return this;
    }

    public void setPreviousChurch(String previousChurch) {
        this.previousChurch = previousChurch;
    }

    public String getIntroducer() {
        return introducer;
    }

    public NewCommer introducer(String introducer) {
        this.introducer = introducer;
        return this;
    }

    public void setIntroducer(String introducer) {
        this.introducer = introducer;
    }

    public Set<ServiceValue> getServicevalues() {
        return servicevalues;
    }

    public NewCommer servicevalues(Set<ServiceValue> serviceValues) {
        this.servicevalues = serviceValues;
        return this;
    }

    public NewCommer addServicevalue(ServiceValue serviceValue) {
        this.servicevalues.add(serviceValue);
        serviceValue.getNewcommers().add(this);
        return this;
    }

    public NewCommer removeServicevalue(ServiceValue serviceValue) {
        this.servicevalues.remove(serviceValue);
        serviceValue.getNewcommers().remove(this);
        return this;
    }

    public void setServicevalues(Set<ServiceValue> serviceValues) {
        this.servicevalues = serviceValues;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof NewCommer)) {
            return false;
        }
        return id != null && id.equals(((NewCommer) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "NewCommer{" +
            "id=" + getId() +
            ", ismember='" + getIsmember() + "'" +
            ", koreanName='" + getKoreanName() + "'" +
            ", englishName='" + getEnglishName() + "'" +
            ", birthDay='" + getBirthDay() + "'" +
            ", gender='" + getGender() + "'" +
            ", address='" + getAddress() + "'" +
            ", city='" + getCity() + "'" +
            ", province='" + getProvince() + "'" +
            ", postalCode='" + getPostalCode() + "'" +
            ", phoneNumber='" + getPhoneNumber() + "'" +
            ", email='" + getEmail() + "'" +
            ", job='" + getJob() + "'" +
            ", company='" + getCompany() + "'" +
            ", carNumber='" + getCarNumber() + "'" +
            ", baptismType='" + getBaptismType() + "'" +
            ", baptismChurch='" + getBaptismChurch() + "'" +
            ", baptismYear=" + getBaptismYear() +
            ", visaStatus='" + getVisaStatus() + "'" +
            ", duty='" + getDuty() + "'" +
            ", previousChurch='" + getPreviousChurch() + "'" +
            ", introducer='" + getIntroducer() + "'" +
            "}";
    }
}
