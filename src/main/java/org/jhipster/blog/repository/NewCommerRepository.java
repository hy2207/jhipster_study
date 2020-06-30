package org.jhipster.blog.repository;

import org.jhipster.blog.domain.NewCommer;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the NewCommer entity.
 */
@Repository
public interface NewCommerRepository extends JpaRepository<NewCommer, Long> {

    @Query(value = "select distinct newCommer from NewCommer newCommer left join fetch newCommer.servicevalues",
        countQuery = "select count(distinct newCommer) from NewCommer newCommer")
    Page<NewCommer> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct newCommer from NewCommer newCommer left join fetch newCommer.servicevalues")
    List<NewCommer> findAllWithEagerRelationships();

    @Query("select newCommer from NewCommer newCommer left join fetch newCommer.servicevalues where newCommer.id =:id")
    Optional<NewCommer> findOneWithEagerRelationships(@Param("id") Long id);
}
