package org.jhipster.blog.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import org.jhipster.blog.domain.enumeration.ServiceTitle;

/**
 * A ServiceValue.
 */
@Entity
@Table(name = "service_value")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ServiceValue implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "service_experience")
    private ServiceTitle serviceExperience;

    @ManyToMany(mappedBy = "servicevalues")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnore
    private Set<NewCommer> newcommers = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ServiceTitle getServiceExperience() {
        return serviceExperience;
    }

    public ServiceValue serviceExperience(ServiceTitle serviceExperience) {
        this.serviceExperience = serviceExperience;
        return this;
    }

    public void setServiceExperience(ServiceTitle serviceExperience) {
        this.serviceExperience = serviceExperience;
    }

    public Set<NewCommer> getNewcommers() {
        return newcommers;
    }

    public ServiceValue newcommers(Set<NewCommer> newCommers) {
        this.newcommers = newCommers;
        return this;
    }

    public ServiceValue addNewcommer(NewCommer newCommer) {
        this.newcommers.add(newCommer);
        newCommer.getServicevalues().add(this);
        return this;
    }

    public ServiceValue removeNewcommer(NewCommer newCommer) {
        this.newcommers.remove(newCommer);
        newCommer.getServicevalues().remove(this);
        return this;
    }

    public void setNewcommers(Set<NewCommer> newCommers) {
        this.newcommers = newCommers;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ServiceValue)) {
            return false;
        }
        return id != null && id.equals(((ServiceValue) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ServiceValue{" +
            "id=" + getId() +
            ", serviceExperience='" + getServiceExperience() + "'" +
            "}";
    }
}
