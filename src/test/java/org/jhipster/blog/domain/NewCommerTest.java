package org.jhipster.blog.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import org.jhipster.blog.web.rest.TestUtil;

public class NewCommerTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(NewCommer.class);
        NewCommer newCommer1 = new NewCommer();
        newCommer1.setId(1L);
        NewCommer newCommer2 = new NewCommer();
        newCommer2.setId(newCommer1.getId());
        assertThat(newCommer1).isEqualTo(newCommer2);
        newCommer2.setId(2L);
        assertThat(newCommer1).isNotEqualTo(newCommer2);
        newCommer1.setId(null);
        assertThat(newCommer1).isNotEqualTo(newCommer2);
    }
}
