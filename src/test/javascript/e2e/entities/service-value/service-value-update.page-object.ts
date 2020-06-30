import { element, by, ElementFinder } from 'protractor';

export default class ServiceValueUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipsterStudyApp.serviceValue.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  serviceExperienceSelect: ElementFinder = element(by.css('select#service-value-serviceExperience'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setServiceExperienceSelect(serviceExperience) {
    await this.serviceExperienceSelect.sendKeys(serviceExperience);
  }

  async getServiceExperienceSelect() {
    return this.serviceExperienceSelect.element(by.css('option:checked')).getText();
  }

  async serviceExperienceSelectLastOption() {
    await this.serviceExperienceSelect.all(by.tagName('option')).last().click();
  }
  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
