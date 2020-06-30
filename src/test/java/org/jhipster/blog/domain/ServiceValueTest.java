package org.jhipster.blog.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import org.jhipster.blog.web.rest.TestUtil;

public class ServiceValueTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ServiceValue.class);
        ServiceValue serviceValue1 = new ServiceValue();
        serviceValue1.setId(1L);
        ServiceValue serviceValue2 = new ServiceValue();
        serviceValue2.setId(serviceValue1.getId());
        assertThat(serviceValue1).isEqualTo(serviceValue2);
        serviceValue2.setId(2L);
        assertThat(serviceValue1).isNotEqualTo(serviceValue2);
        serviceValue1.setId(null);
        assertThat(serviceValue1).isNotEqualTo(serviceValue2);
    }
}
