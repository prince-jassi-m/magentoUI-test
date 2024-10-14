## Installation

Steps to Follow:- 

1. Run the following command on the installation :- php bin/magento sampledata:deploy
2. Run the following commands :- 

php bin/magento s:up 
php bin/magento s:s:d -f
php bin/magento c:f

3. Add New configurable product from admin and create there respective configurations.You can get the product images store in the following path :- app/design/uitest/theme/web/images/. Also Create product attribute names as color and size for the confguration and add there options. Choose the Color input type as Swatches while creating the attribute, and set the option Use Product Image for Swatch if Possible to Yes.

4. Select Product Info Column From  Display Product Options under the Design Section.

5. Create three pagebuiler attributes named as delivery,fit,share from magento admin. Assign them to current attribute set and add text values.

6. Create on static block with identifier "detail_static_block" for the footer section on the detail page. And use the below content :- 
```html
<div class="detailStaticBlock">
  <p>a note from the editor</p>
<div class="detailsStaticcontent">
  <p>The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. </p>
</div>
<div class="authorName">
<p>By MINNA SHIM, Fashion Editor</p>
</div>
</div>
```
7. Disable stock information visibility for frontend from Admin from the following path :- Store->configuration->catalog->inventory->stock information->Display Products Availability in Stock on Storefront.

8. Run the following commands :- 

php bin/magento i:rei
php bin/magento c:f

9. git clone git@github.com:prince-jassi-m/magento-uitest.git on your root directory.MagentoUitest folder will be created move the theme and .git folder to the root directory i.e. magento root directory.

10. Run magento deployment and upgrade commands.

11. Select the new theme from admin configuration i.e content->configuartion->select the Uitest theme.

12. Run all deployment and upgrade commands.
