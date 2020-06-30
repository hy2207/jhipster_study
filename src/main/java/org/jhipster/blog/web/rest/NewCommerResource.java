package org.jhipster.blog.web.rest;

import org.jhipster.blog.domain.NewCommer;
import org.jhipster.blog.repository.NewCommerRepository;
import org.jhipster.blog.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link org.jhipster.blog.domain.NewCommer}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class NewCommerResource {

    private final Logger log = LoggerFactory.getLogger(NewCommerResource.class);

    private static final String ENTITY_NAME = "newCommer";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final NewCommerRepository newCommerRepository;

    public NewCommerResource(NewCommerRepository newCommerRepository) {
        this.newCommerRepository = newCommerRepository;
    }

    /**
     * {@code POST  /new-commers} : Create a new newCommer.
     *
     * @param newCommer the newCommer to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new newCommer, or with status {@code 400 (Bad Request)} if the newCommer has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/new-commers")
    public ResponseEntity<NewCommer> createNewCommer(@Valid @RequestBody NewCommer newCommer) throws URISyntaxException {
        log.debug("REST request to save NewCommer : {}", newCommer);
        if (newCommer.getId() != null) {
            throw new BadRequestAlertException("A new newCommer cannot already have an ID", ENTITY_NAME, "idexists");
        }
        NewCommer result = newCommerRepository.save(newCommer);
        return ResponseEntity.created(new URI("/api/new-commers/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /new-commers} : Updates an existing newCommer.
     *
     * @param newCommer the newCommer to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated newCommer,
     * or with status {@code 400 (Bad Request)} if the newCommer is not valid,
     * or with status {@code 500 (Internal Server Error)} if the newCommer couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/new-commers")
    public ResponseEntity<NewCommer> updateNewCommer(@Valid @RequestBody NewCommer newCommer) throws URISyntaxException {
        log.debug("REST request to update NewCommer : {}", newCommer);
        if (newCommer.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        NewCommer result = newCommerRepository.save(newCommer);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, newCommer.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /new-commers} : get all the newCommers.
     *
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of newCommers in body.
     */
    @GetMapping("/new-commers")
    public List<NewCommer> getAllNewCommers(@RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        log.debug("REST request to get all NewCommers");
        return newCommerRepository.findAllWithEagerRelationships();
    }

    /**
     * {@code GET  /new-commers/:id} : get the "id" newCommer.
     *
     * @param id the id of the newCommer to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the newCommer, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/new-commers/{id}")
    public ResponseEntity<NewCommer> getNewCommer(@PathVariable Long id) {
        log.debug("REST request to get NewCommer : {}", id);
        Optional<NewCommer> newCommer = newCommerRepository.findOneWithEagerRelationships(id);
        return ResponseUtil.wrapOrNotFound(newCommer);
    }

    /**
     * {@code DELETE  /new-commers/:id} : delete the "id" newCommer.
     *
     * @param id the id of the newCommer to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/new-commers/{id}")
    public ResponseEntity<Void> deleteNewCommer(@PathVariable Long id) {
        log.debug("REST request to delete NewCommer : {}", id);
        newCommerRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
