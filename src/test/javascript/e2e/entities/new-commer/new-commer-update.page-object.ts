import { element, by, ElementFinder } from 'protractor';

export default class NewCommerUpdatePage {
  pageTitle: ElementFinder = element(by.id('jhipsterStudyApp.newCommer.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  ismemberSelect: ElementFinder = element(by.css('select#new-commer-ismember'));
  koreanNameInput: ElementFinder = element(by.css('input#new-commer-koreanName'));
  englishNameInput: ElementFinder = element(by.css('input#new-commer-englishName'));
  birthDayInput: ElementFinder = element(by.css('input#new-commer-birthDay'));
  genderSelect: ElementFinder = element(by.css('select#new-commer-gender'));
  addressInput: ElementFinder = element(by.css('input#new-commer-address'));
  cityInput: ElementFinder = element(by.css('input#new-commer-city'));
  provinceInput: ElementFinder = element(by.css('input#new-commer-province'));
  postalCodeInput: ElementFinder = element(by.css('input#new-commer-postalCode'));
  phoneNumberInput: ElementFinder = element(by.css('input#new-commer-phoneNumber'));
  emailInput: ElementFinder = element(by.css('input#new-commer-email'));
  jobInput: ElementFinder = element(by.css('input#new-commer-job'));
  companyInput: ElementFinder = element(by.css('input#new-commer-company'));
  carNumberInput: ElementFinder = element(by.css('input#new-commer-carNumber'));
  baptismTypeSelect: ElementFinder = element(by.css('select#new-commer-baptismType'));
  baptismChurchInput: ElementFinder = element(by.css('input#new-commer-baptismChurch'));
  baptismYearInput: ElementFinder = element(by.css('input#new-commer-baptismYear'));
  visaStatusSelect: ElementFinder = element(by.css('select#new-commer-visaStatus'));
  dutySelect: ElementFinder = element(by.css('select#new-commer-duty'));
  previousChurchInput: ElementFinder = element(by.css('input#new-commer-previousChurch'));
  introducerInput: ElementFinder = element(by.css('input#new-commer-introducer'));
  servicevalueSelect: ElementFinder = element(by.css('select#new-commer-servicevalue'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setIsmemberSelect(ismember) {
    await this.ismemberSelect.sendKeys(ismember);
  }

  async getIsmemberSelect() {
    return this.ismemberSelect.element(by.css('option:checked')).getText();
  }

  async ismemberSelectLastOption() {
    await this.ismemberSelect.all(by.tagName('option')).last().click();
  }
  async setKoreanNameInput(koreanName) {
    await this.koreanNameInput.sendKeys(koreanName);
  }

  async getKoreanNameInput() {
    return this.koreanNameInput.getAttribute('value');
  }

  async setEnglishNameInput(englishName) {
    await this.englishNameInput.sendKeys(englishName);
  }

  async getEnglishNameInput() {
    return this.englishNameInput.getAttribute('value');
  }

  async setBirthDayInput(birthDay) {
    await this.birthDayInput.sendKeys(birthDay);
  }

  async getBirthDayInput() {
    return this.birthDayInput.getAttribute('value');
  }

  async setGenderSelect(gender) {
    await this.genderSelect.sendKeys(gender);
  }

  async getGenderSelect() {
    return this.genderSelect.element(by.css('option:checked')).getText();
  }

  async genderSelectLastOption() {
    await this.genderSelect.all(by.tagName('option')).last().click();
  }
  async setAddressInput(address) {
    await this.addressInput.sendKeys(address);
  }

  async getAddressInput() {
    return this.addressInput.getAttribute('value');
  }

  async setCityInput(city) {
    await this.cityInput.sendKeys(city);
  }

  async getCityInput() {
    return this.cityInput.getAttribute('value');
  }

  async setProvinceInput(province) {
    await this.provinceInput.sendKeys(province);
  }

  async getProvinceInput() {
    return this.provinceInput.getAttribute('value');
  }

  async setPostalCodeInput(postalCode) {
    await this.postalCodeInput.sendKeys(postalCode);
  }

  async getPostalCodeInput() {
    return this.postalCodeInput.getAttribute('value');
  }

  async setPhoneNumberInput(phoneNumber) {
    await this.phoneNumberInput.sendKeys(phoneNumber);
  }

  async getPhoneNumberInput() {
    return this.phoneNumberInput.getAttribute('value');
  }

  async setEmailInput(email) {
    await this.emailInput.sendKeys(email);
  }

  async getEmailInput() {
    return this.emailInput.getAttribute('value');
  }

  async setJobInput(job) {
    await this.jobInput.sendKeys(job);
  }

  async getJobInput() {
    return this.jobInput.getAttribute('value');
  }

  async setCompanyInput(company) {
    await this.companyInput.sendKeys(company);
  }

  async getCompanyInput() {
    return this.companyInput.getAttribute('value');
  }

  async setCarNumberInput(carNumber) {
    await this.carNumberInput.sendKeys(carNumber);
  }

  async getCarNumberInput() {
    return this.carNumberInput.getAttribute('value');
  }

  async setBaptismTypeSelect(baptismType) {
    await this.baptismTypeSelect.sendKeys(baptismType);
  }

  async getBaptismTypeSelect() {
    return this.baptismTypeSelect.element(by.css('option:checked')).getText();
  }

  async baptismTypeSelectLastOption() {
    await this.baptismTypeSelect.all(by.tagName('option')).last().click();
  }
  async setBaptismChurchInput(baptismChurch) {
    await this.baptismChurchInput.sendKeys(baptismChurch);
  }

  async getBaptismChurchInput() {
    return this.baptismChurchInput.getAttribute('value');
  }

  async setBaptismYearInput(baptismYear) {
    await this.baptismYearInput.sendKeys(baptismYear);
  }

  async getBaptismYearInput() {
    return this.baptismYearInput.getAttribute('value');
  }

  async setVisaStatusSelect(visaStatus) {
    await this.visaStatusSelect.sendKeys(visaStatus);
  }

  async getVisaStatusSelect() {
    return this.visaStatusSelect.element(by.css('option:checked')).getText();
  }

  async visaStatusSelectLastOption() {
    await this.visaStatusSelect.all(by.tagName('option')).last().click();
  }
  async setDutySelect(duty) {
    await this.dutySelect.sendKeys(duty);
  }

  async getDutySelect() {
    return this.dutySelect.element(by.css('option:checked')).getText();
  }

  async dutySelectLastOption() {
    await this.dutySelect.all(by.tagName('option')).last().click();
  }
  async setPreviousChurchInput(previousChurch) {
    await this.previousChurchInput.sendKeys(previousChurch);
  }

  async getPreviousChurchInput() {
    return this.previousChurchInput.getAttribute('value');
  }

  async setIntroducerInput(introducer) {
    await this.introducerInput.sendKeys(introducer);
  }

  async getIntroducerInput() {
    return this.introducerInput.getAttribute('value');
  }

  async servicevalueSelectLastOption() {
    await this.servicevalueSelect.all(by.tagName('option')).last().click();
  }

  async servicevalueSelectOption(option) {
    await this.servicevalueSelect.sendKeys(option);
  }

  getServicevalueSelect() {
    return this.servicevalueSelect;
  }

  async getServicevalueSelectedOption() {
    return this.servicevalueSelect.element(by.css('option:checked')).getText();
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
