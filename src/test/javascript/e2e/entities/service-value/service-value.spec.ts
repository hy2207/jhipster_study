import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import ServiceValueComponentsPage, { ServiceValueDeleteDialog } from './service-value.page-object';
import ServiceValueUpdatePage from './service-value-update.page-object';
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

describe('ServiceValue e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let serviceValueComponentsPage: ServiceValueComponentsPage;
  let serviceValueUpdatePage: ServiceValueUpdatePage;
  let serviceValueDeleteDialog: ServiceValueDeleteDialog;
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

  it('should load ServiceValues', async () => {
    await navBarPage.getEntityPage('service-value');
    serviceValueComponentsPage = new ServiceValueComponentsPage();
    expect(await serviceValueComponentsPage.title.getText()).to.match(/Service Values/);

    expect(await serviceValueComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilAnyDisplayed([serviceValueComponentsPage.noRecords, serviceValueComponentsPage.table]);

    beforeRecordsCount = (await isVisible(serviceValueComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(serviceValueComponentsPage.table);
  });

  it('should load create ServiceValue page', async () => {
    await serviceValueComponentsPage.createButton.click();
    serviceValueUpdatePage = new ServiceValueUpdatePage();
    expect(await serviceValueUpdatePage.getPageTitle().getAttribute('id')).to.match(/jhipsterStudyApp.serviceValue.home.createOrEditLabel/);
    await serviceValueUpdatePage.cancel();
  });

  it('should create and save ServiceValues', async () => {
    await serviceValueComponentsPage.createButton.click();
    await serviceValueUpdatePage.serviceExperienceSelectLastOption();
    await waitUntilDisplayed(serviceValueUpdatePage.saveButton);
    await serviceValueUpdatePage.save();
    await waitUntilHidden(serviceValueUpdatePage.saveButton);
    expect(await isVisible(serviceValueUpdatePage.saveButton)).to.be.false;

    expect(await serviceValueComponentsPage.createButton.isEnabled()).to.be.true;

    await waitUntilDisplayed(serviceValueComponentsPage.table);

    await waitUntilCount(serviceValueComponentsPage.records, beforeRecordsCount + 1);
    expect(await serviceValueComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);
  });

  it('should delete last ServiceValue', async () => {
    const deleteButton = serviceValueComponentsPage.getDeleteButton(serviceValueComponentsPage.records.last());
    await click(deleteButton);

    serviceValueDeleteDialog = new ServiceValueDeleteDialog();
    await waitUntilDisplayed(serviceValueDeleteDialog.deleteModal);
    expect(await serviceValueDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipsterStudyApp.serviceValue.delete.question/);
    await serviceValueDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(serviceValueDeleteDialog.deleteModal);

    expect(await isVisible(serviceValueDeleteDialog.deleteModal)).to.be.false;

    await waitUntilAnyDisplayed([serviceValueComponentsPage.noRecords, serviceValueComponentsPage.table]);

    const afterCount = (await isVisible(serviceValueComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(serviceValueComponentsPage.table);
    expect(afterCount).to.eq(beforeRecordsCount);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
