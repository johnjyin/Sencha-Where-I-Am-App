Sencha-Where-I-Am-App
===========================

One Sencha & Google Map Mobile App

Please click <a href="http://demo.ebizdesigner.com/whereiam" target="_blank"> <b>Here</b> </a> to run this mobile app.

<div name="thumbnail">
<img width=30% src="whereiam-welcome.jpg"></img>&nbsp;
<img width=30% src="whereiam-address.jpg"></img>&nbsp;
<img width=30% src="whereiam-map.jpg"></img>&nbsp;
</div>

WhereIAm Sencha Touch app with following features: 
- Develope platform: Sencha Architect -> Sencha Touch (2.*) and Sencha CMD
- Use HTML 5 Geolocation API to fetch device's geography address: latitude and longitude
- Use Google Map API to convert geo address to real world detail address: no, street/road, city, state, country, postcode
- Use Memory Proxy to read the newly created JSON data (the detail address) into Store and show them out on one data List
- The default Welcome Panel and detail address List are Card Layout children of their common Container, so as to be actived on reqired

Step:
<ol>
<li> Use Sencha Architect -> Sencha Touch to quick build app
<li> Use Sencha CMD to create one blank app and transplant Touch app to blank app
<li> Use Sencha CMD to build and deploy production app (Sencha Architect build process is too complex)
</ol>

The left issues:
- The production app is too big (1.07 MB) and need to be optimization
- The building process of Sencha Architect is too complex and the production app can not run normally
