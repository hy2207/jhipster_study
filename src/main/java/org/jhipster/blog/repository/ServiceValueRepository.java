package org.jhipster.blog.repository;

import org.jhipster.blog.domain.ServiceValue;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the ServiceValue entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ServiceValueRepository extends JpaRepository<ServiceValue, Long> {
}
