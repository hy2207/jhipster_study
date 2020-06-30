import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import NewCommerComponentsPage, { NewCommerDeleteDialog } from './new-commer.page-object';
import NewCommerUpdatePage from './new-commer-update.page-object';
import {
  waitUntilDisplayed,
  waitUntilAnyDisplayed,
  click,
  getRecordsCount,
  waitUntilHidden,
  waitUntilCount,
  isVisible,
} from '../../util/utils';

const expect = chai.expect;

describe('NewCommer e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let newCommerComponentsPage: NewCommerComponentsPage;
  let newCommerUpdatePage: NewCommerUpdatePage;
  let newCommerDeleteDialog: NewCommerDeleteDialog;
  let beforeRecordsCount = 0;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();

    await signInPage.username.sendKeys('admin');
    await signInPage.password.sendKeys('admin');
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
    await waitUntilDisplayed(navBarPage.adminMenu);
    await waitUntilDisplayed(navBarPage.accountMenu);
  });

  it('should load NewCommers', async () => {
    await navBarPage.getEntityPage('new-commer');
    newCommerComponentsPage = new NewCommerComponentsPage();
    expect(await newCommerComponentsPage.title.getText()).to.match(/New Commers/);

    expect(await newCommerComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilAnyDisplayed([newCommerComponentsPage.noRecords, newCommerComponentsPage.table]);

    beforeRecordsCount = (await isVisible(newCommerComponentsPage.noRecords)) ? 0 : await getRecordsCount(newCommerComponentsPage.table);
  });

  it('should load create NewCommer page', async () => {
    await newCommerComponentsPage.createButton.click();
    newCommerUpdatePage = new NewCommerUpdatePage();
    expect(await newCommerUpdatePage.getPageTitle().getAttribute('id')).to.match(/jhipsterStudyApp.newCommer.home.createOrEditLabel/);
    await newCommerUpdatePage.cancel();
  });

  it('should create and save NewCommers', async () => {
    await newCommerComponentsPage.createButton.click();
    await newCommerUpdatePage.ismemberSelectLastOption();
    await newCommerUpdatePage.setKoreanNameInput('koreanName');
    expect(await newCommerUpdatePage.getKoreanNameInput()).to.match(/koreanName/);
    await newCommerUpdatePage.setEnglishNameInput('englishName');
    expect(await newCommerUpdatePage.getEnglishNameInput()).to.match(/englishName/);
    await newCommerUpdatePage.setBirthDayInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await newCommerUpdatePage.getBirthDayInput()).to.contain('2001-01-01T02:30');
    await newCommerUpdatePage.genderSelectLastOption();
    await newCommerUpdatePage.setAddressInput('address');
    expect(await newCommerUpdatePage.getAddressInput()).to.match(/address/);
    await newCommerUpdatePage.setCityInput('city');
    expect(await newCommerUpdatePage.getCityInput()).to.match(/city/);
    await newCommerUpdatePage.setProvinceInput('province');
    expect(await newCommerUpdatePage.getProvinceInput()).to.match(/province/);
    await newCommerUpdatePage.setPostalCodeInput('postalCode');
    expect(await newCommerUpdatePage.getPostalCodeInput()).to.match(/postalCode/);
    await newCommerUpdatePage.setPhoneNumberInput('phoneNumber');
    expect(await newCommerUpdatePage.getPhoneNumberInput()).to.match(/phoneNumber/);
    await newCommerUpdatePage.setEmailInput('email');
    expect(await newCommerUpdatePage.getEmailInput()).to.match(/email/);
    await newCommerUpdatePage.setJobInput('job');
    expect(await newCommerUpdatePage.getJobInput()).to.match(/job/);
    await newCommerUpdatePage.setCompanyInput('company');
    expect(await newCommerUpdatePage.getCompanyInput()).to.match(/company/);
    await newCommerUpdatePage.setCarNumberInput('carNumber');
    expect(await newCommerUpdatePage.getCarNumberInput()).to.match(/carNumber/);
    await newCommerUpdatePage.baptismTypeSelectLastOption();
    await newCommerUpdatePage.setBaptismChurchInput('baptismChurch');
    expect(await newCommerUpdatePage.getBaptismChurchInput()).to.match(/baptismChurch/);
    await newCommerUpdatePage.setBaptismYearInput('5');
    expect(await newCommerUpdatePage.getBaptismYearInput()).to.eq('5');
    await newCommerUpdatePage.visaStatusSelectLastOption();
    await newCommerUpdatePage.dutySelectLastOption();
    await newCommerUpdatePage.setPreviousChurchInput('previousChurch');
    expect(await newCommerUpdatePage.getPreviousChurchInput()).to.match(/previousChurch/);
    await newCommerUpdatePage.setIntroducerInput('introducer');
    expect(await newCommerUpdatePage.getIntroducerInput()).to.match(/introducer/);
    // newCommerUpdatePage.servicevalueSelectLastOption();
    await waitUntilDisplayed(newCommerUpdatePage.saveButton);
    await newCommerUpdatePage.save();
    await waitUntilHidden(newCommerUpdatePage.saveButton);
    expect(await isVisible(newCommerUpdatePage.saveButton)).to.be.false;

    expect(await newCommerComponentsPage.createButton.isEnabled()).to.be.true;

    await waitUntilDisplayed(newCommerComponentsPage.table);

    await waitUntilCount(newCommerComponentsPage.records, beforeRecordsCount + 1);
    expect(await newCommerComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);
  });

  it('should delete last NewCommer', async () => {
    const deleteButton = newCommerComponentsPage.getDeleteButton(newCommerComponentsPage.records.last());
    await click(deleteButton);

    newCommerDeleteDialog = new NewCommerDeleteDialog();
    await waitUntilDisplayed(newCommerDeleteDialog.deleteModal);
    expect(await newCommerDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipsterStudyApp.newCommer.delete.question/);
    await newCommerDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(newCommerDeleteDialog.deleteModal);

    expect(await isVisible(newCommerDeleteDialog.deleteModal)).to.be.false;

    await waitUntilAnyDisplayed([newCommerComponentsPage.noRecords, newCommerComponentsPage.table]);

    const afterCount = (await isVisible(newCommerComponentsPage.noRecords)) ? 0 : await getRecordsCount(newCommerComponentsPage.table);
    expect(afterCount).to.eq(beforeRecordsCount);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
