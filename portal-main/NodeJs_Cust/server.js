const express = require("express");
var request = require("request");
const parser = require("xml-js");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());

app.post("/login", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =
    `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_CUSTLOGIN_DS>
        <!--You may enter the following 2 items in any order-->
        <!--Optional:-->
        <ID>` +
    uname +
    `</ID>
        <!--Optional:-->
        <WF_PASSWRD>` +
    pwd +
    `</WF_PASSWRD>
     </urn:ZFM_CUSTLOGIN_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
  var options = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_CP_DS&receiverParty=&receiverService=&interface=SI_CUST_LOG_DS&interfaceNamespace=http://Cust_Portal_DS.com",
    headers: {
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      "Content-Type": "application/xml",
      Authorization: "Basic UE9VU0VSQDE6VGVjaEAyMDIy",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyODA5MzMFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjI4MDkzMzUxWjAjBgkqhkiG9w0BCQQxFgQUoLmLWAodBVJhHYAVUG6q019ahzYwCQYHKoZIzjgEAwQvMC0CFQDvIYJJ7vyneKcbGzEVOYo3314ZUwIUfOOH6eyFWmifmW67A8Mc0LN3ws8%3D; JSESSIONID=iJzCkIY_qQTIkHMFEVvolYgA9aipgQF-Y2kA_SAPjwC-VGnqhzdyjoToeW9-XrAP; JSESSIONMARKID=1W5dNAbV6MEg6IFJg0tYd6Jw1La7wOxSkc4n5jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: postData,
  };
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/inquiry", function (req, res) {
    uname = req.body.uname;
    pwd = req.body.pwd;
    const postData =
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
      <soapenv:Header/>
      <soapenv:Body>
         <urn:ZFM_CUST_INQUIRYLIST_DS>
            <!--You may enter the following 2 items in any order-->
            <I_CUSTID>`+uname+`</I_CUSTID>
            <!--Optional:-->
            <IT_INQUIRY_LIST>
               <!--Zero or more repetitions:-->
               <item>
                  <!--Optional:-->
                  <MANDT></MANDT>
                  <!--Optional:-->
                  <VBELN></VBELN>
                  <!--Optional:-->
                  <ERDAT></ERDAT>
                  <!--Optional:-->
                  <ERZET></ERZET>
                  <!--Optional:-->
                  <ERNAM></ERNAM>
                  <!--Optional:-->
                  <ANGDT></ANGDT>
                  <!--Optional:-->
                  <BNDDT></BNDDT>
                  <!--Optional:-->
                  <AUDAT></AUDAT>
                  <!--Optional:-->
                  <VBTYP></VBTYP>
                  <!--Optional:-->
                  <TRVOG></TRVOG>
                  <!--Optional:-->
                  <AUART></AUART>
                  <!--Optional:-->
                  <AUGRU></AUGRU>
                  <!--Optional:-->
                  <GWLDT></GWLDT>
                  <!--Optional:-->
                  <SUBMI></SUBMI>
                  <!--Optional:-->
                  <LIFSK></LIFSK>
                  <!--Optional:-->
                  <FAKSK></FAKSK>
                  <!--Optional:-->
                  <NETWR></NETWR>
                  <!--Optional:-->
                  <WAERK></WAERK>
                  <!--Optional:-->
                  <VKORG></VKORG>
                  <!--Optional:-->
                  <VTWEG></VTWEG>
                  <!--Optional:-->
                  <SPART></SPART>
                  <!--Optional:-->
                  <VKGRP></VKGRP>
                  <!--Optional:-->
                  <VKBUR></VKBUR>
                  <!--Optional:-->
                  <GSBER></GSBER>
                  <!--Optional:-->
                  <GSKST></GSKST>
                  <!--Optional:-->
                  <GUEBG></GUEBG>
                  <!--Optional:-->
                  <GUEEN></GUEEN>
                  <!--Optional:-->
                  <KNUMV></KNUMV>
                  <!--Optional:-->
                  <VDATU></VDATU>
                  <!--Optional:-->
                  <VPRGR></VPRGR>
                  <!--Optional:-->
                  <AUTLF></AUTLF>
                  <!--Optional:-->
                  <VBKLA></VBKLA>
                  <!--Optional:-->
                  <VBKLT></VBKLT>
                  <!--Optional:-->
                  <KALSM></KALSM>
                  <!--Optional:-->
                  <VSBED></VSBED>
                  <!--Optional:-->
                  <FKARA></FKARA>
                  <!--Optional:-->
                  <AWAHR></AWAHR>
                  <!--Optional:-->
                  <KTEXT></KTEXT>
                  <!--Optional:-->
                  <BSTNK></BSTNK>
                  <!--Optional:-->
                  <BSARK></BSARK>
                  <!--Optional:-->
                  <BSTDK></BSTDK>
                  <!--Optional:-->
                  <BSTZD></BSTZD>
                  <!--Optional:-->
                  <IHREZ></IHREZ>
                  <!--Optional:-->
                  <BNAME></BNAME>
                  <!--Optional:-->
                  <TELF1></TELF1>
                  <!--Optional:-->
                  <MAHZA></MAHZA>
                  <!--Optional:-->
                  <MAHDT></MAHDT>
                  <!--Optional:-->
                  <KUNNR></KUNNR>
                  <!--Optional:-->
                  <KOSTL></KOSTL>
                  <!--Optional:-->
                  <STAFO></STAFO>
                  <!--Optional:-->
                  <STWAE></STWAE>
                  <!--Optional:-->
                  <AEDAT></AEDAT>
                  <!--Optional:-->
                  <KVGR1></KVGR1>
                  <!--Optional:-->
                  <KVGR2></KVGR2>
                  <!--Optional:-->
                  <KVGR3></KVGR3>
                  <!--Optional:-->
                  <KVGR4></KVGR4>
                  <!--Optional:-->
                  <KVGR5></KVGR5>
                  <!--Optional:-->
                  <KNUMA></KNUMA>
                  <!--Optional:-->
                  <KOKRS></KOKRS>
                  <!--Optional:-->
                  <PS_PSP_PNR></PS_PSP_PNR>
                  <!--Optional:-->
                  <KURST></KURST>
                  <!--Optional:-->
                  <KKBER></KKBER>
                  <!--Optional:-->
                  <KNKLI></KNKLI>
                  <!--Optional:-->
                  <GRUPP></GRUPP>
                  <!--Optional:-->
                  <SBGRP></SBGRP>
                  <!--Optional:-->
                  <CTLPC></CTLPC>
                  <!--Optional:-->
                  <CMWAE></CMWAE>
                  <!--Optional:-->
                  <CMFRE></CMFRE>
                  <!--Optional:-->
                  <CMNUP></CMNUP>
                  <!--Optional:-->
                  <CMNGV></CMNGV>
                  <!--Optional:-->
                  <AMTBL></AMTBL>
                  <!--Optional:-->
                  <HITYP_PR></HITYP_PR>
                  <!--Optional:-->
                  <ABRVW></ABRVW>
                  <!--Optional:-->
                  <ABDIS></ABDIS>
                  <!--Optional:-->
                  <VGBEL></VGBEL>
                  <!--Optional:-->
                  <OBJNR></OBJNR>
                  <!--Optional:-->
                  <BUKRS_VF></BUKRS_VF>
                  <!--Optional:-->
                  <TAXK1></TAXK1>
                  <!--Optional:-->
                  <TAXK2></TAXK2>
                  <!--Optional:-->
                  <TAXK3></TAXK3>
                  <!--Optional:-->
                  <TAXK4></TAXK4>
                  <!--Optional:-->
                  <TAXK5></TAXK5>
                  <!--Optional:-->
                  <TAXK6></TAXK6>
                  <!--Optional:-->
                  <TAXK7></TAXK7>
                  <!--Optional:-->
                  <TAXK8></TAXK8>
                  <!--Optional:-->
                  <TAXK9></TAXK9>
                  <!--Optional:-->
                  <XBLNR></XBLNR>
                  <!--Optional:-->
                  <ZUONR></ZUONR>
                  <!--Optional:-->
                  <VGTYP></VGTYP>
                  <!--Optional:-->
                  <KALSM_CH></KALSM_CH>
                  <!--Optional:-->
                  <AGRZR></AGRZR>
                  <!--Optional:-->
                  <AUFNR></AUFNR>
                  <!--Optional:-->
                  <QMNUM></QMNUM>
                  <!--Optional:-->
                  <VBELN_GRP></VBELN_GRP>
                  <!--Optional:-->
                  <SCHEME_GRP></SCHEME_GRP>
                  <!--Optional:-->
                  <ABRUF_PART></ABRUF_PART>
                  <!--Optional:-->
                  <ABHOD></ABHOD>
                  <!--Optional:-->
                  <ABHOV></ABHOV>
                  <!--Optional:-->
                  <ABHOB></ABHOB>
                  <!--Optional:-->
                  <RPLNR></RPLNR>
                  <!--Optional:-->
                  <VZEIT></VZEIT>
                  <!--Optional:-->
                  <STCEG_L></STCEG_L>
                  <!--Optional:-->
                  <LANDTX></LANDTX>
                  <!--Optional:-->
                  <XEGDR></XEGDR>
                  <!--Optional:-->
                  <ENQUEUE_GRP></ENQUEUE_GRP>
                  <!--Optional:-->
                  <DAT_FZAU></DAT_FZAU>
                  <!--Optional:-->
                  <FMBDAT></FMBDAT>
                  <!--Optional:-->
                  <VSNMR_V></VSNMR_V>
                  <!--Optional:-->
                  <HANDLE></HANDLE>
                  <!--Optional:-->
                  <PROLI></PROLI>
                  <!--Optional:-->
                  <CONT_DG></CONT_DG>
                  <!--Optional:-->
                  <CRM_GUID></CRM_GUID>
                  <!--Optional:-->
                  <UPD_TMSTMP></UPD_TMSTMP>
                  <!--Optional:-->
                  <MSR_ID></MSR_ID>
                  <!--Optional:-->
                  <TM_CTRL_KEY></TM_CTRL_KEY>
                  <!--Optional:-->
                  <HANDOVERLOC></HANDOVERLOC>
                  <!--Optional:-->
                  <_DATAAGING></_DATAAGING>
                  <!--Optional:-->
                  <PSM_BUDAT></PSM_BUDAT>
                  <!--Optional:-->
                  <FSH_KVGR6></FSH_KVGR6>
                  <!--Optional:-->
                  <FSH_KVGR7></FSH_KVGR7>
                  <!--Optional:-->
                  <FSH_KVGR8></FSH_KVGR8>
                  <!--Optional:-->
                  <FSH_KVGR9></FSH_KVGR9>
                  <!--Optional:-->
                  <FSH_KVGR10></FSH_KVGR10>
                  <!--Optional:-->
                  <FSH_REREG></FSH_REREG>
                  <!--Optional:-->
                  <FSH_CQ_CHECK></FSH_CQ_CHECK>
                  <!--Optional:-->
                  <FSH_VRSN_STATUS></FSH_VRSN_STATUS>
                  <!--Optional:-->
                  <FSH_TRANSACTION></FSH_TRANSACTION>
                  <!--Optional:-->
                  <FSH_VAS_CG></FSH_VAS_CG>
                  <!--Optional:-->
                  <FSH_CANDATE></FSH_CANDATE>
                  <!--Optional:-->
                  <FSH_SS></FSH_SS>
                  <!--Optional:-->
                  <FSH_OS_STG_CHANGE></FSH_OS_STG_CHANGE>
                  <!--Optional:-->
                  <SWENR></SWENR>
                  <!--Optional:-->
                  <SMENR></SMENR>
                  <!--Optional:-->
                  <PHASE></PHASE>
                  <!--Optional:-->
                  <MTLAUR></MTLAUR>
                  <!--Optional:-->
                  <STAGE></STAGE>
                  <!--Optional:-->
                  <HB_CONT_REASON></HB_CONT_REASON>
                  <!--Optional:-->
                  <HB_EXPDATE></HB_EXPDATE>
                  <!--Optional:-->
                  <HB_RESDATE></HB_RESDATE>
                  <!--Optional:-->
                  <MILL_APPL_ID></MILL_APPL_ID>
                  <!--Optional:-->
                  <TAS></TAS>
                  <!--Optional:-->
                  <BETC></BETC>
                  <!--Optional:-->
                  <MOD_ALLOW></MOD_ALLOW>
                  <!--Optional:-->
                  <CANCEL_ALLOW></CANCEL_ALLOW>
                  <!--Optional:-->
                  <PAY_METHOD></PAY_METHOD>
                  <!--Optional:-->
                  <BPN></BPN>
                  <!--Optional:-->
                  <REP_FREQ></REP_FREQ>
                  <!--Optional:-->
                  <LOGSYSB></LOGSYSB>
                  <!--Optional:-->
                  <KALCD></KALCD>
                  <!--Optional:-->
                  <MULTI></MULTI>
                  <!--Optional:-->
                  <SPPAYM></SPPAYM>
                  <!--Optional:-->
                  <WTYSC_CLM_HDR></WTYSC_CLM_HDR>
               </item>
            </IT_INQUIRY_LIST>
         </urn:ZFM_CUST_INQUIRYLIST_DS>
      </soapenv:Body>
   </soapenv:Envelope>`;
   var options = {
    method: "POST",
    url: "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_CP_DS&receiverParty=&receiverService=&interface=SI_CUST_INQUIRYLIST_DS&interfaceNamespace=http://Cust_Portal_DS.com",
    headers: {
      SOAPAction: "http://sap.com/xi/WebService/soap1.1",
      "Content-Type": "application/xml",
      Authorization: "Basic UE9VU0VSQDE6VGVjaEAyMDIy",
      Cookie:
        "MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyODA5MzMFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjI4MDkzMzUxWjAjBgkqhkiG9w0BCQQxFgQUoLmLWAodBVJhHYAVUG6q019ahzYwCQYHKoZIzjgEAwQvMC0CFQDvIYJJ7vyneKcbGzEVOYo3314ZUwIUfOOH6eyFWmifmW67A8Mc0LN3ws8%3D; JSESSIONID=iJzCkIY_qQTIkHMFEVvolYgA9aipgQF-Y2kA_SAPjwC-VGnqhzdyjoToeW9-XrAP; JSESSIONMARKID=1W5dNAbV6MEg6IFJg0tYd6Jw1La7wOxSkc4n5jaQA; saplb_*=(J2EE6906720)6906750",
    },
    body: postData
  };
    request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
        result1 = JSON.parse(result1);
        res.send(result1);
        console.log(result1);
      }
    });
  });

app.post("/salesorder", function (req, res) {
    uname = req.body.uname;
    pwd = req.body.pwd;
    const postData =
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
      <soapenv:Header/>
      <soapenv:Body>
         <urn:ZFM_CUST_SALEORDER_DS>
            <!--You may enter the following 3 items in any order-->
            <IM_CUSTID>`+uname+`</IM_CUSTID>
            <IM_SALES_ORG></IM_SALES_ORG>
            <!--Optional:-->
            <IT_SALES_ORDERS>
               <!--Zero or more repetitions:-->
               <item>
                  <!--Optional:-->
                  <SD_DOC></SD_DOC>
                  <!--Optional:-->
                  <ITM_NUMBER></ITM_NUMBER>
                  <!--Optional:-->
                  <MATERIAL></MATERIAL>
                  <!--Optional:-->
                  <SHORT_TEXT></SHORT_TEXT>
                  <!--Optional:-->
                  <DOC_TYPE></DOC_TYPE>
                  <!--Optional:-->
                  <DOC_DATE></DOC_DATE>
                  <!--Optional:-->
                  <REQ_QTY></REQ_QTY>
                  <!--Optional:-->
                  <REQ_DATE></REQ_DATE>
                  <!--Optional:-->
                  <PURCH_NO></PURCH_NO>
                  <!--Optional:-->
                  <BATCH></BATCH>
                  <!--Optional:-->
                  <VALID_FROM></VALID_FROM>
                  <!--Optional:-->
                  <VALID_TO></VALID_TO>
                  <!--Optional:-->
                  <BILL_BLOCK></BILL_BLOCK>
                  <!--Optional:-->
                  <DLV_BLOCK></DLV_BLOCK>
                  <!--Optional:-->
                  <SOLD_TO></SOLD_TO>
                  <!--Optional:-->
                  <NAME></NAME>
                  <!--Optional:-->
                  <EXCHG_RATE></EXCHG_RATE>
                  <!--Optional:-->
                  <DLV_QTY></DLV_QTY>
                  <!--Optional:-->
                  <BASE_UOM></BASE_UOM>
                  <!--Optional:-->
                  <NET_PRICE></NET_PRICE>
                  <!--Optional:-->
                  <COND_P_UNT></COND_P_UNT>
                  <!--Optional:-->
                  <COND_UNIT></COND_UNIT>
                  <!--Optional:-->
                  <NET_VAL_HD></NET_VAL_HD>
                  <!--Optional:-->
                  <NET_VALUE></NET_VALUE>
                  <!--Optional:-->
                  <DIVISION></DIVISION>
                  <!--Optional:-->
                  <DOC_STATUS></DOC_STATUS>
                  <!--Optional:-->
                  <SALES_GRP></SALES_GRP>
                  <!--Optional:-->
                  <SALES_OFF></SALES_OFF>
                  <!--Optional:-->
                  <SALES_ORG></SALES_ORG>
                  <!--Optional:-->
                  <SALES_UNIT></SALES_UNIT>
                  <!--Optional:-->
                  <SHIP_POINT></SHIP_POINT>
                  <!--Optional:-->
                  <DISTR_CHAN></DISTR_CHAN>
                  <!--Optional:-->
                  <GI_DATE></GI_DATE>
                  <!--Optional:-->
                  <CURRENCY></CURRENCY>
                  <!--Optional:-->
                  <PLANT></PLANT>
                  <!--Optional:-->
                  <STORE_LOC></STORE_LOC>
                  <!--Optional:-->
                  <ORD_REASON></ORD_REASON>
                  <!--Optional:-->
                  <REASON_REJ></REASON_REJ>
                  <!--Optional:-->
                  <B_UOM_ISO></B_UOM_ISO>
                  <!--Optional:-->
                  <CD_UNT_ISO></CD_UNT_ISO>
                  <!--Optional:-->
                  <S_UNIT_ISO></S_UNIT_ISO>
                  <!--Optional:-->
                  <CURR_ISO></CURR_ISO>
                  <!--Optional:-->
                  <PURCH_NO_C></PURCH_NO_C>
                  <!--Optional:-->
                  <EXCHG_RATE_V></EXCHG_RATE_V>
                  <!--Optional:-->
                  <MAT_EXT></MAT_EXT>
                  <!--Optional:-->
                  <MAT_GUID></MAT_GUID>
                  <!--Optional:-->
                  <MAT_VERS></MAT_VERS>
                  <!--Optional:-->
                  <CREATION_DATE></CREATION_DATE>
                  <!--Optional:-->
                  <CREATION_TIME></CREATION_TIME>
                  <!--Optional:-->
                  <STATUS_DOC></STATUS_DOC>
                  <!--Optional:-->
                  <REQ_SEGMENT></REQ_SEGMENT>
                  <!--Optional:-->
                  <MATERIAL_LONG></MATERIAL_LONG>
               </item>
            </IT_SALES_ORDERS>
         </urn:ZFM_CUST_SALEORDER_DS>
      </soapenv:Body>
   </soapenv:Envelope>
      `;
      var options = {
        'method': 'POST',
        'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_CP_DS&receiverParty=&receiverService=&interface=SI_CUST_SALEORDER_DS&interfaceNamespace=http://Cust_Portal_DS.com',
        'headers': {
          'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
          'Content-Type': 'application/xml',
          'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
          'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyODA5MzMFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjI4MDkzMzUxWjAjBgkqhkiG9w0BCQQxFgQUoLmLWAodBVJhHYAVUG6q019ahzYwCQYHKoZIzjgEAwQvMC0CFQDvIYJJ7vyneKcbGzEVOYo3314ZUwIUfOOH6eyFWmifmW67A8Mc0LN3ws8%3D; JSESSIONID=iJzCkIY_qQTIkHMFEVvolYgA9aipgQF-Y2kA_SAPjwC-VGnqhzdyjoToeW9-XrAP; JSESSIONMARKID=1W5dNAbV6MEg6IFJg0tYd6Jw1La7wOxSkc4n5jaQA; saplb_*=(J2EE6906720)6906750'
        },
        body: postData
      };
    request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
        result1 = JSON.parse(result1);
        res.send(result1);
        console.log(result1);
      }
    });
  });  

app.post("/invoicelist", function (req, res) {
    uname = req.body.uname;
    pwd = req.body.pwd;
    const postData =
    `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZFM_CUST_INVOICELIST_DS>
          <!--You may enter the following 2 items in any order-->
          <IM_CUSTID>`+uname+`</IM_CUSTID>
          <!--Optional:-->
          <IT_INVOICE_LIST>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <MANDT></MANDT>
                <!--Optional:-->
                <VBELN></VBELN>
                <!--Optional:-->
                <FKART></FKART>
                <!--Optional:-->
                <FKTYP></FKTYP>
                <!--Optional:-->
                <VBTYP></VBTYP>
                <!--Optional:-->
                <WAERK></WAERK>
                <!--Optional:-->
                <VKORG></VKORG>
                <!--Optional:-->
                <VTWEG></VTWEG>
                <!--Optional:-->
                <KALSM></KALSM>
                <!--Optional:-->
                <KNUMV></KNUMV>
                <!--Optional:-->
                <VSBED></VSBED>
                <!--Optional:-->
                <FKDAT></FKDAT>
                <!--Optional:-->
                <BELNR></BELNR>
                <!--Optional:-->
                <GJAHR></GJAHR>
                <!--Optional:-->
                <POPER></POPER>
                <!--Optional:-->
                <KONDA></KONDA>
                <!--Optional:-->
                <KDGRP></KDGRP>
                <!--Optional:-->
                <BZIRK></BZIRK>
                <!--Optional:-->
                <PLTYP></PLTYP>
                <!--Optional:-->
                <INCO1></INCO1>
                <!--Optional:-->
                <INCO2></INCO2>
                <!--Optional:-->
                <EXPKZ></EXPKZ>
                <!--Optional:-->
                <RFBSK></RFBSK>
                <!--Optional:-->
                <MRNKZ></MRNKZ>
                <!--Optional:-->
                <KURRF></KURRF>
                <!--Optional:-->
                <CPKUR></CPKUR>
                <!--Optional:-->
                <VALTG></VALTG>
                <!--Optional:-->
                <VALDT></VALDT>
                <!--Optional:-->
                <ZTERM></ZTERM>
                <!--Optional:-->
                <ZLSCH></ZLSCH>
                <!--Optional:-->
                <KTGRD></KTGRD>
                <!--Optional:-->
                <LAND1></LAND1>
                <!--Optional:-->
                <REGIO></REGIO>
                <!--Optional:-->
                <COUNC></COUNC>
                <!--Optional:-->
                <CITYC></CITYC>
                <!--Optional:-->
                <BUKRS></BUKRS>
                <!--Optional:-->
                <TAXK1></TAXK1>
                <!--Optional:-->
                <TAXK2></TAXK2>
                <!--Optional:-->
                <TAXK3></TAXK3>
                <!--Optional:-->
                <TAXK4></TAXK4>
                <!--Optional:-->
                <TAXK5></TAXK5>
                <!--Optional:-->
                <TAXK6></TAXK6>
                <!--Optional:-->
                <TAXK7></TAXK7>
                <!--Optional:-->
                <TAXK8></TAXK8>
                <!--Optional:-->
                <TAXK9></TAXK9>
                <!--Optional:-->
                <NETWR></NETWR>
                <!--Optional:-->
                <ZUKRI></ZUKRI>
                <!--Optional:-->
                <ERNAM></ERNAM>
                <!--Optional:-->
                <ERZET></ERZET>
                <!--Optional:-->
                <ERDAT></ERDAT>
                <!--Optional:-->
                <STAFO></STAFO>
                <!--Optional:-->
                <KUNRG></KUNRG>
                <!--Optional:-->
                <KUNAG></KUNAG>
                <!--Optional:-->
                <MABER></MABER>
                <!--Optional:-->
                <STWAE></STWAE>
                <!--Optional:-->
                <EXNUM></EXNUM>
                <!--Optional:-->
                <STCEG></STCEG>
                <!--Optional:-->
                <AEDAT></AEDAT>
                <!--Optional:-->
                <SFAKN></SFAKN>
                <!--Optional:-->
                <KNUMA></KNUMA>
                <!--Optional:-->
                <FKART_RL></FKART_RL>
                <!--Optional:-->
                <FKDAT_RL></FKDAT_RL>
                <!--Optional:-->
                <KURST></KURST>
                <!--Optional:-->
                <MSCHL></MSCHL>
                <!--Optional:-->
                <MANSP></MANSP>
                <!--Optional:-->
                <SPART></SPART>
                <!--Optional:-->
                <KKBER></KKBER>
                <!--Optional:-->
                <KNKLI></KNKLI>
                <!--Optional:-->
                <CMWAE></CMWAE>
                <!--Optional:-->
                <CMKUF></CMKUF>
                <!--Optional:-->
                <HITYP_PR></HITYP_PR>
                <!--Optional:-->
                <BSTNK_VF></BSTNK_VF>
                <!--Optional:-->
                <VBUND></VBUND>
                <!--Optional:-->
                <FKART_AB></FKART_AB>
                <!--Optional:-->
                <KAPPL></KAPPL>
                <!--Optional:-->
                <LANDTX></LANDTX>
                <!--Optional:-->
                <STCEG_H></STCEG_H>
                <!--Optional:-->
                <STCEG_L></STCEG_L>
                <!--Optional:-->
                <XBLNR></XBLNR>
                <!--Optional:-->
                <ZUONR></ZUONR>
                <!--Optional:-->
                <MWSBK></MWSBK>
                <!--Optional:-->
                <LOGSYS></LOGSYS>
                <!--Optional:-->
                <FKSTO></FKSTO>
                <!--Optional:-->
                <XEGDR></XEGDR>
                <!--Optional:-->
                <RPLNR></RPLNR>
                <!--Optional:-->
                <LCNUM></LCNUM>
                <!--Optional:-->
                <J_1AFITP></J_1AFITP>
                <!--Optional:-->
                <KURRF_DAT></KURRF_DAT>
                <!--Optional:-->
                <AKWAE></AKWAE>
                <!--Optional:-->
                <AKKUR></AKKUR>
                <!--Optional:-->
                <KIDNO></KIDNO>
                <!--Optional:-->
                <BVTYP></BVTYP>
                <!--Optional:-->
                <NUMPG></NUMPG>
                <!--Optional:-->
                <BUPLA></BUPLA>
                <!--Optional:-->
                <VKONT></VKONT>
                <!--Optional:-->
                <FKK_DOCSTAT></FKK_DOCSTAT>
                <!--Optional:-->
                <NRZAS></NRZAS>
                <!--Optional:-->
                <SPE_BILLING_IND></SPE_BILLING_IND>
                <!--Optional:-->
                <VTREF></VTREF>
                <!--Optional:-->
                <FK_SOURCE_SYS></FK_SOURCE_SYS>
                <!--Optional:-->
                <FKTYP_CRM></FKTYP_CRM>
                <!--Optional:-->
                <STGRD></STGRD>
                <!--Optional:-->
                <VBTYP_EXT></VBTYP_EXT>
                <!--Optional:-->
                <J_1TPBUPL></J_1TPBUPL>
                <!--Optional:-->
                <INCOV></INCOV>
                <!--Optional:-->
                <INCO2_L></INCO2_L>
                <!--Optional:-->
                <INCO3_L></INCO3_L>
                <!--Optional:-->
                <DPC_REL></DPC_REL>
                <!--Optional:-->
                <MNDID></MNDID>
                <!--Optional:-->
                <PAY_TYPE></PAY_TYPE>
                <!--Optional:-->
                <SEPON></SEPON>
                <!--Optional:-->
                <MNDVG></MNDVG>
                <!--Optional:-->
                <SPPAYM></SPPAYM>
                <!--Optional:-->
                <SPPORD></SPPORD>
             </item>
          </IT_INVOICE_LIST>
       </urn:ZFM_CUST_INVOICELIST_DS>
    </soapenv:Body>
 </soapenv:Envelope>`;
 var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_CP_DS&receiverParty=&receiverService=&interface=SI_CUST_INVOICELIST_DS&interfaceNamespace=http://Cust_Portal_DS.com',
    'headers': {
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Content-Type': 'application/xml',
      'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyODA5MzMFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjI4MDkzMzUxWjAjBgkqhkiG9w0BCQQxFgQUoLmLWAodBVJhHYAVUG6q019ahzYwCQYHKoZIzjgEAwQvMC0CFQDvIYJJ7vyneKcbGzEVOYo3314ZUwIUfOOH6eyFWmifmW67A8Mc0LN3ws8%3D; JSESSIONID=iJzCkIY_qQTIkHMFEVvolYgA9aipgQF-Y2kA_SAPjwC-VGnqhzdyjoToeW9-XrAP; JSESSIONMARKID=1W5dNAbV6MEg6IFJg0tYd6Jw1La7wOxSkc4n5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: postData
  
  };
    request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
        result1 = JSON.parse(result1);
        res.send(result1);
        console.log(result1);
    }
    });
});  

app.post("/delivery", function (req, res) {
    uname = req.body.uname;
    pwd = req.body.pwd;
    const postData =
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
      <soapenv:Header/>
      <soapenv:Body>
         <urn:ZFM_CUST_DELIVERY_DS>
            <!--You may enter the following 2 items in any order-->
            <IM_CUSTID>`+uname+`</IM_CUSTID>
            <!--Optional:-->
            <IT_DELIVERY_LIST>
               <!--Zero or more repetitions:-->
               <item>
                  <!--Optional:-->
                  <MANDT></MANDT>
                  <!--Optional:-->
                  <VBELN></VBELN>
                  <!--Optional:-->
                  <ERNAM></ERNAM>
                  <!--Optional:-->
                  <ERZET></ERZET>
                  <!--Optional:-->
                  <ERDAT></ERDAT>
                  <!--Optional:-->
                  <BZIRK></BZIRK>
                  <!--Optional:-->
                  <VSTEL></VSTEL>
                  <!--Optional:-->
                  <VKORG></VKORG>
                  <!--Optional:-->
                  <LFART></LFART>
                  <!--Optional:-->
                  <AUTLF></AUTLF>
                  <!--Optional:-->
                  <KZAZU></KZAZU>
                  <!--Optional:-->
                  <WADAT></WADAT>
                  <!--Optional:-->
                  <LDDAT></LDDAT>
                  <!--Optional:-->
                  <TDDAT></TDDAT>
                  <!--Optional:-->
                  <LFDAT></LFDAT>
                  <!--Optional:-->
                  <KODAT></KODAT>
                  <!--Optional:-->
                  <ABLAD></ABLAD>
                  <!--Optional:-->
                  <INCO1></INCO1>
                  <!--Optional:-->
                  <INCO2></INCO2>
                  <!--Optional:-->
                  <EXPKZ></EXPKZ>
                  <!--Optional:-->
                  <ROUTE></ROUTE>
                  <!--Optional:-->
                  <FAKSK></FAKSK>
                  <!--Optional:-->
                  <LIFSK></LIFSK>
                  <!--Optional:-->
                  <VBTYP></VBTYP>
                  <!--Optional:-->
                  <KNFAK></KNFAK>
                  <!--Optional:-->
                  <TPQUA></TPQUA>
                  <!--Optional:-->
                  <TPGRP></TPGRP>
                  <!--Optional:-->
                  <LPRIO></LPRIO>
                  <!--Optional:-->
                  <VSBED></VSBED>
                  <!--Optional:-->
                  <KUNNR></KUNNR>
                  <!--Optional:-->
                  <KUNAG></KUNAG>
                  <!--Optional:-->
                  <KDGRP></KDGRP>
                  <!--Optional:-->
                  <STZKL></STZKL>
                  <!--Optional:-->
                  <STZZU></STZZU>
                  <!--Optional:-->
                  <BTGEW></BTGEW>
                  <!--Optional:-->
                  <NTGEW></NTGEW>
                  <!--Optional:-->
                  <GEWEI></GEWEI>
                  <!--Optional:-->
                  <VOLUM></VOLUM>
                  <!--Optional:-->
                  <VOLEH></VOLEH>
                  <!--Optional:-->
                  <ANZPK></ANZPK>
                  <!--Optional:-->
                  <BEROT></BEROT>
                  <!--Optional:-->
                  <LFUHR></LFUHR>
                  <!--Optional:-->
                  <GRULG></GRULG>
                  <!--Optional:-->
                  <LSTEL></LSTEL>
                  <!--Optional:-->
                  <TRAGR></TRAGR>
                  <!--Optional:-->
                  <FKARV></FKARV>
                  <!--Optional:-->
                  <FKDAT></FKDAT>
                  <!--Optional:-->
                  <PERFK></PERFK>
                  <!--Optional:-->
                  <ROUTA></ROUTA>
                  <!--Optional:-->
                  <STAFO></STAFO>
                  <!--Optional:-->
                  <KALSM></KALSM>
                  <!--Optional:-->
                  <KNUMV></KNUMV>
                  <!--Optional:-->
                  <WAERK></WAERK>
                  <!--Optional:-->
                  <VKBUR></VKBUR>
                  <!--Optional:-->
                  <VBEAK></VBEAK>
                  <!--Optional:-->
                  <ZUKRL></ZUKRL>
                  <!--Optional:-->
                  <VERUR></VERUR>
                  <!--Optional:-->
                  <COMMN></COMMN>
                  <!--Optional:-->
                  <STWAE></STWAE>
                  <!--Optional:-->
                  <STCUR></STCUR>
                  <!--Optional:-->
                  <EXNUM></EXNUM>
                  <!--Optional:-->
                  <AENAM></AENAM>
                  <!--Optional:-->
                  <AEDAT></AEDAT>
                  <!--Optional:-->
                  <LGNUM></LGNUM>
                  <!--Optional:-->
                  <LISPL></LISPL>
                  <!--Optional:-->
                  <VKOIV></VKOIV>
                  <!--Optional:-->
                  <VTWIV></VTWIV>
                  <!--Optional:-->
                  <SPAIV></SPAIV>
                  <!--Optional:-->
                  <FKAIV></FKAIV>
                  <!--Optional:-->
                  <PIOIV></PIOIV>
                  <!--Optional:-->
                  <FKDIV></FKDIV>
                  <!--Optional:-->
                  <KUNIV></KUNIV>
                  <!--Optional:-->
                  <KKBER></KKBER>
                  <!--Optional:-->
                  <KNKLI></KNKLI>
                  <!--Optional:-->
                  <GRUPP></GRUPP>
                  <!--Optional:-->
                  <SBGRP></SBGRP>
                  <!--Optional:-->
                  <CTLPC></CTLPC>
                  <!--Optional:-->
                  <CMWAE></CMWAE>
                  <!--Optional:-->
                  <AMTBL></AMTBL>
                  <!--Optional:-->
                  <BOLNR></BOLNR>
                  <!--Optional:-->
                  <LIFNR></LIFNR>
                  <!--Optional:-->
                  <TRATY></TRATY>
                  <!--Optional:-->
                  <TRAID></TRAID>
                  <!--Optional:-->
                  <CMFRE></CMFRE>
                  <!--Optional:-->
                  <CMNGV></CMNGV>
                  <!--Optional:-->
                  <XABLN></XABLN>
                  <!--Optional:-->
                  <BLDAT></BLDAT>
                  <!--Optional:-->
                  <WADAT_IST></WADAT_IST>
                  <!--Optional:-->
                  <TRSPG></TRSPG>
                  <!--Optional:-->
                  <TPSID></TPSID>
                  <!--Optional:-->
                  <LIFEX></LIFEX>
                  <!--Optional:-->
                  <TERNR></TERNR>
                  <!--Optional:-->
                  <KALSM_CH></KALSM_CH>
                  <!--Optional:-->
                  <KLIEF></KLIEF>
                  <!--Optional:-->
                  <KALSP></KALSP>
                  <!--Optional:-->
                  <KNUMP></KNUMP>
                  <!--Optional:-->
                  <NETWR></NETWR>
                  <!--Optional:-->
                  <AULWE></AULWE>
                  <!--Optional:-->
                  <WERKS></WERKS>
                  <!--Optional:-->
                  <LCNUM></LCNUM>
                  <!--Optional:-->
                  <ABSSC></ABSSC>
                  <!--Optional:-->
                  <KOUHR></KOUHR>
                  <!--Optional:-->
                  <TDUHR></TDUHR>
                  <!--Optional:-->
                  <LDUHR></LDUHR>
                  <!--Optional:-->
                  <WAUHR></WAUHR>
                  <!--Optional:-->
                  <LGTOR></LGTOR>
                  <!--Optional:-->
                  <LGBZO></LGBZO>
                  <!--Optional:-->
                  <AKWAE></AKWAE>
                  <!--Optional:-->
                  <AKKUR></AKKUR>
                  <!--Optional:-->
                  <AKPRZ></AKPRZ>
                  <!--Optional:-->
                  <PROLI></PROLI>
                  <!--Optional:-->
                  <XBLNR></XBLNR>
                  <!--Optional:-->
                  <HANDLE></HANDLE>
                  <!--Optional:-->
                  <TSEGFL></TSEGFL>
                  <!--Optional:-->
                  <TSEGTP></TSEGTP>
                  <!--Optional:-->
                  <TZONIS></TZONIS>
                  <!--Optional:-->
                  <TZONRC></TZONRC>
                  <!--Optional:-->
                  <CONT_DG></CONT_DG>
                  <!--Optional:-->
                  <VERURSYS></VERURSYS>
                  <!--Optional:-->
                  <KZWAB></KZWAB>
                  <!--Optional:-->
                  <VLSTK></VLSTK>
                  <!--Optional:-->
                  <TCODE></TCODE>
                  <!--Optional:-->
                  <VSART></VSART>
                  <!--Optional:-->
                  <TRMTYP></TRMTYP>
                  <!--Optional:-->
                  <SDABW></SDABW>
                  <!--Optional:-->
                  <VBUND></VBUND>
                  <!--Optional:-->
                  <XWOFF></XWOFF>
                  <!--Optional:-->
                  <DIRTA></DIRTA>
                  <!--Optional:-->
                  <PRVBE></PRVBE>
                  <!--Optional:-->
                  <FOLAR></FOLAR>
                  <!--Optional:-->
                  <PODAT></PODAT>
                  <!--Optional:-->
                  <POTIM></POTIM>
                  <!--Optional:-->
                  <VGANZ></VGANZ>
                  <!--Optional:-->
                  <IMWRK></IMWRK>
                  <!--Optional:-->
                  <SPE_LOEKZ></SPE_LOEKZ>
                  <!--Optional:-->
                  <SPE_LOC_SEQ></SPE_LOC_SEQ>
                  <!--Optional:-->
                  <SPE_ACC_APP_STS></SPE_ACC_APP_STS>
                  <!--Optional:-->
                  <SPE_SHP_INF_STS></SPE_SHP_INF_STS>
                  <!--Optional:-->
                  <SPE_RET_CANC></SPE_RET_CANC>
                  <!--Optional:-->
                  <SPE_WAUHR_IST></SPE_WAUHR_IST>
                  <!--Optional:-->
                  <SPE_WAZONE_IST></SPE_WAZONE_IST>
                  <!--Optional:-->
                  <SPE_REV_VLSTK></SPE_REV_VLSTK>
                  <!--Optional:-->
                  <SPE_LE_SCENARIO></SPE_LE_SCENARIO>
                  <!--Optional:-->
                  <SPE_ORIG_SYS></SPE_ORIG_SYS>
                  <!--Optional:-->
                  <SPE_CHNG_SYS></SPE_CHNG_SYS>
                  <!--Optional:-->
                  <SPE_GEOROUTE></SPE_GEOROUTE>
                  <!--Optional:-->
                  <SPE_GEOROUTEIND></SPE_GEOROUTEIND>
                  <!--Optional:-->
                  <SPE_CARRIER_IND></SPE_CARRIER_IND>
                  <!--Optional:-->
                  <SPE_GTS_REL></SPE_GTS_REL>
                  <!--Optional:-->
                  <SPE_GTS_RT_CDE></SPE_GTS_RT_CDE>
                  <!--Optional:-->
                  <SPE_REL_TMSTMP></SPE_REL_TMSTMP>
                  <!--Optional:-->
                  <SPE_UNIT_SYSTEM></SPE_UNIT_SYSTEM>
                  <!--Optional:-->
                  <SPE_INV_BFR_GI></SPE_INV_BFR_GI>
                  <!--Optional:-->
                  <SPE_QI_STATUS></SPE_QI_STATUS>
                  <!--Optional:-->
                  <SPE_RED_IND></SPE_RED_IND>
                  <!--Optional:-->
                  <SAKES></SAKES>
                  <!--Optional:-->
                  <SPE_LIFEX_TYPE></SPE_LIFEX_TYPE>
                  <!--Optional:-->
                  <SPE_TTYPE></SPE_TTYPE>
                  <!--Optional:-->
                  <INCOV></INCOV>
                  <!--Optional:-->
                  <INCO2_L></INCO2_L>
                  <!--Optional:-->
                  <INCO3_L></INCO3_L>
                  <!--Optional:-->
                  <TRMTYP_LONG></TRMTYP_LONG>
                  <!--Optional:-->
                  <VBTYP_LONG></VBTYP_LONG>
               </item>
            </IT_DELIVERY_LIST>
         </urn:ZFM_CUST_DELIVERY_DS>
      </soapenv:Body>
   </soapenv:Envelope>`;
   var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_CP_DS&receiverParty=&receiverService=&interface=SI_CUST_DELIVERY_DS&interfaceNamespace=http://Cust_Portal_DS.com',
    'headers': {
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Content-Type': 'application/xml',
      'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyODA5MzMFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjI4MDkzMzUxWjAjBgkqhkiG9w0BCQQxFgQUoLmLWAodBVJhHYAVUG6q019ahzYwCQYHKoZIzjgEAwQvMC0CFQDvIYJJ7vyneKcbGzEVOYo3314ZUwIUfOOH6eyFWmifmW67A8Mc0LN3ws8%3D; JSESSIONID=iJzCkIY_qQTIkHMFEVvolYgA9aipgQF-Y2kA_SAPjwC-VGnqhzdyjoToeW9-XrAP; JSESSIONMARKID=1W5dNAbV6MEg6IFJg0tYd6Jw1La7wOxSkc4n5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: postData
  
  };
    request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
        result1 = JSON.parse(result1);
        res.send(result1);
        console.log(result1);
      }
    });
  });

app.post("/paymentage", function (req, res) {
uname = req.body.uname;
pwd = req.body.pwd;
const postData =
    `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZFM_CUST_PAYMENTAGE_DS>
          <!--You may enter the following 3 items in any order-->
          <IM_COMPANY_CODE>0001</IM_COMPANY_CODE>
          <IM_CUSTID>`+uname+`</IM_CUSTID>
          <!--Optional:-->
          <IT_PAYMENT_LIST>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <COMP_CODE></COMP_CODE>
                <!--Optional:-->
                <CUSTOMER></CUSTOMER>
                <!--Optional:-->
                <SP_GL_IND></SP_GL_IND>
                <!--Optional:-->
                <CLEAR_DATE></CLEAR_DATE>
                <!--Optional:-->
                <CLR_DOC_NO></CLR_DOC_NO>
                <!--Optional:-->
                <ALLOC_NMBR></ALLOC_NMBR>
                <!--Optional:-->
                <FISC_YEAR></FISC_YEAR>
                <!--Optional:-->
                <DOC_NO></DOC_NO>
                <!--Optional:-->
                <ITEM_NUM></ITEM_NUM>
                <!--Optional:-->
                <PSTNG_DATE></PSTNG_DATE>
                <!--Optional:-->
                <DOC_DATE></DOC_DATE>
                <!--Optional:-->
                <ENTRY_DATE></ENTRY_DATE>
                <!--Optional:-->
                <CURRENCY></CURRENCY>
                <!--Optional:-->
                <LOC_CURRCY></LOC_CURRCY>
                <!--Optional:-->
                <REF_DOC_NO></REF_DOC_NO>
                <!--Optional:-->
                <DOC_TYPE></DOC_TYPE>
                <!--Optional:-->
                <FIS_PERIOD></FIS_PERIOD>
                <!--Optional:-->
                <POST_KEY></POST_KEY>
                <!--Optional:-->
                <DB_CR_IND></DB_CR_IND>
                <!--Optional:-->
                <BUS_AREA></BUS_AREA>
                <!--Optional:-->
                <TAX_CODE></TAX_CODE>
                <!--Optional:-->
                <LC_AMOUNT></LC_AMOUNT>
                <!--Optional:-->
                <AMT_DOCCUR></AMT_DOCCUR>
                <!--Optional:-->
                <LC_TAX></LC_TAX>
                <!--Optional:-->
                <TX_DOC_CUR></TX_DOC_CUR>
                <!--Optional:-->
                <ITEM_TEXT></ITEM_TEXT>
                <!--Optional:-->
                <BRANCH></BRANCH>
                <!--Optional:-->
                <BLINE_DATE></BLINE_DATE>
                <!--Optional:-->
                <PMNTTRMS></PMNTTRMS>
                <!--Optional:-->
                <DSCT_DAYS1></DSCT_DAYS1>
                <!--Optional:-->
                <DSCT_DAYS2></DSCT_DAYS2>
                <!--Optional:-->
                <NETTERMS></NETTERMS>
                <!--Optional:-->
                <DSCT_PCT1></DSCT_PCT1>
                <!--Optional:-->
                <DSCT_PCT2></DSCT_PCT2>
                <!--Optional:-->
                <DISC_BASE></DISC_BASE>
                <!--Optional:-->
                <DSC_AMT_LC></DSC_AMT_LC>
                <!--Optional:-->
                <DSC_AMT_DC></DSC_AMT_DC>
                <!--Optional:-->
                <PYMT_METH></PYMT_METH>
                <!--Optional:-->
                <PMNT_BLOCK></PMNT_BLOCK>
                <!--Optional:-->
                <FIXEDTERMS></FIXEDTERMS>
                <!--Optional:-->
                <INV_REF></INV_REF>
                <!--Optional:-->
                <INV_YEAR></INV_YEAR>
                <!--Optional:-->
                <INV_ITEM></INV_ITEM>
                <!--Optional:-->
                <DUNN_BLOCK></DUNN_BLOCK>
                <!--Optional:-->
                <DUNN_KEY></DUNN_KEY>
                <!--Optional:-->
                <LAST_DUNN></LAST_DUNN>
                <!--Optional:-->
                <DUNN_LEVEL></DUNN_LEVEL>
                <!--Optional:-->
                <DUNN_AREA></DUNN_AREA>
                <!--Optional:-->
                <DOC_STATUS></DOC_STATUS>
                <!--Optional:-->
                <NXT_DOCTYP></NXT_DOCTYP>
                <!--Optional:-->
                <VAT_REG_NO></VAT_REG_NO>
                <!--Optional:-->
                <REASON_CDE></REASON_CDE>
                <!--Optional:-->
                <PMTMTHSUPL></PMTMTHSUPL>
                <!--Optional:-->
                <REF_KEY_1></REF_KEY_1>
                <!--Optional:-->
                <REF_KEY_2></REF_KEY_2>
                <!--Optional:-->
                <T_CURRENCY></T_CURRENCY>
                <!--Optional:-->
                <AMOUNT></AMOUNT>
                <!--Optional:-->
                <NET_AMOUNT></NET_AMOUNT>
                <!--Optional:-->
                <NAME></NAME>
                <!--Optional:-->
                <NAME_2></NAME_2>
                <!--Optional:-->
                <NAME_3></NAME_3>
                <!--Optional:-->
                <NAME_4></NAME_4>
                <!--Optional:-->
                <POSTL_CODE></POSTL_CODE>
                <!--Optional:-->
                <CITY></CITY>
                <!--Optional:-->
                <COUNTRY></COUNTRY>
                <!--Optional:-->
                <STREET></STREET>
                <!--Optional:-->
                <PO_BOX></PO_BOX>
                <!--Optional:-->
                <POBX_PCD></POBX_PCD>
                <!--Optional:-->
                <POBK_CURAC></POBK_CURAC>
                <!--Optional:-->
                <BANK_ACCT></BANK_ACCT>
                <!--Optional:-->
                <BANK_KEY></BANK_KEY>
                <!--Optional:-->
                <BANK_CTRY></BANK_CTRY>
                <!--Optional:-->
                <TAX_NO_1></TAX_NO_1>
                <!--Optional:-->
                <TAX_NO_2></TAX_NO_2>
                <!--Optional:-->
                <TAX></TAX>
                <!--Optional:-->
                <EQUAL_TAX></EQUAL_TAX>
                <!--Optional:-->
                <REGION></REGION>
                <!--Optional:-->
                <CTRL_KEY></CTRL_KEY>
                <!--Optional:-->
                <INSTR_KEY></INSTR_KEY>
                <!--Optional:-->
                <PAYEE_CODE></PAYEE_CODE>
                <!--Optional:-->
                <LANGU></LANGU>
                <!--Optional:-->
                <BILL_LIFE></BILL_LIFE>
                <!--Optional:-->
                <BE_TAXCODE></BE_TAXCODE>
                <!--Optional:-->
                <BILLTAX_LC></BILLTAX_LC>
                <!--Optional:-->
                <BILLTAX_FC></BILLTAX_FC>
                <!--Optional:-->
                <LC_COL_CHG></LC_COL_CHG>
                <!--Optional:-->
                <COLL_CHARG></COLL_CHARG>
                <!--Optional:-->
                <CHGS_TX_CD></CHGS_TX_CD>
                <!--Optional:-->
                <ISSUE_DATE></ISSUE_DATE>
                <!--Optional:-->
                <USAGEDATE></USAGEDATE>
                <!--Optional:-->
                <BILL_USAGE></BILL_USAGE>
                <!--Optional:-->
                <DOMICILE></DOMICILE>
                <!--Optional:-->
                <DRAWER></DRAWER>
                <!--Optional:-->
                <CTRBNK_LOC></CTRBNK_LOC>
                <!--Optional:-->
                <DRAW_CITY1></DRAW_CITY1>
                <!--Optional:-->
                <DRAWEE></DRAWEE>
                <!--Optional:-->
                <DRAW_CITY2></DRAW_CITY2>
                <!--Optional:-->
                <DISCT_DAYS></DISCT_DAYS>
                <!--Optional:-->
                <DISCT_RATE></DISCT_RATE>
                <!--Optional:-->
                <ACCEPTED></ACCEPTED>
                <!--Optional:-->
                <BILLSTATUS></BILLSTATUS>
                <!--Optional:-->
                <PRTEST_IND></PRTEST_IND>
                <!--Optional:-->
                <BE_DEMAND></BE_DEMAND>
                <!--Optional:-->
                <OBJ_TYPE></OBJ_TYPE>
                <!--Optional:-->
                <REF_DOC></REF_DOC>
                <!--Optional:-->
                <REF_ORG_UN></REF_ORG_UN>
                <!--Optional:-->
                <REVERSAL_DOC></REVERSAL_DOC>
                <!--Optional:-->
                <SP_GL_TYPE></SP_GL_TYPE>
                <!--Optional:-->
                <NEG_POSTNG></NEG_POSTNG>
                <!--Optional:-->
                <REF_DOC_NO_LONG></REF_DOC_NO_LONG>
                <!--Optional:-->
                <BILL_DOC></BILL_DOC>
             </item>
          </IT_PAYMENT_LIST>
       </urn:ZFM_CUST_PAYMENTAGE_DS>
    </soapenv:Body>
 </soapenv:Envelope>`;
 var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_CP_DS&receiverParty=&receiverService=&interface=SI_CUST_PAYMENTAGE_DS&interfaceNamespace=http://Cust_Portal_DS.com',
    'headers': {
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Content-Type': 'application/xml',
      'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyODA5MzMFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjI4MDkzMzUxWjAjBgkqhkiG9w0BCQQxFgQUoLmLWAodBVJhHYAVUG6q019ahzYwCQYHKoZIzjgEAwQvMC0CFQDvIYJJ7vyneKcbGzEVOYo3314ZUwIUfOOH6eyFWmifmW67A8Mc0LN3ws8%3D; JSESSIONID=iJzCkIY_qQTIkHMFEVvolYgA9aipgQF-Y2kA_SAPjwC-VGnqhzdyjoToeW9-XrAP; JSESSIONMARKID=1W5dNAbV6MEg6IFJg0tYd6Jw1La7wOxSkc4n5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: postData
  };
request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
    var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
    result1 = JSON.parse(result1);
    res.send(result1);
    console.log(result1);
    }
});
});  

app.post("/crdememo", function (req, res) {
    uname = req.body.uname;
    pwd = req.body.pwd;
    const postData =
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
      <soapenv:Header/>
      <soapenv:Body>
         <urn:ZFM_CUST_CRDBMEMO_DS>
            <!--You may enter the following 2 items in any order-->
            <IM_CUSTID>`+uname+`</IM_CUSTID>
            <!--Optional:-->
            <IT_CRDBMEMO_LIST>
               <!--Zero or more repetitions:-->
               <item>
                  <!--Optional:-->
                  <MANDT></MANDT>
                  <!--Optional:-->
                  <VBELN></VBELN>
                  <!--Optional:-->
                  <FKART></FKART>
                  <!--Optional:-->
                  <FKTYP></FKTYP>
                  <!--Optional:-->
                  <VBTYP></VBTYP>
                  <!--Optional:-->
                  <WAERK></WAERK>
                  <!--Optional:-->
                  <VKORG></VKORG>
                  <!--Optional:-->
                  <VTWEG></VTWEG>
                  <!--Optional:-->
                  <KALSM></KALSM>
                  <!--Optional:-->
                  <KNUMV></KNUMV>
                  <!--Optional:-->
                  <VSBED></VSBED>
                  <!--Optional:-->
                  <FKDAT></FKDAT>
                  <!--Optional:-->
                  <BELNR></BELNR>
                  <!--Optional:-->
                  <GJAHR></GJAHR>
                  <!--Optional:-->
                  <POPER></POPER>
                  <!--Optional:-->
                  <KONDA></KONDA>
                  <!--Optional:-->
                  <KDGRP></KDGRP>
                  <!--Optional:-->
                  <BZIRK></BZIRK>
                  <!--Optional:-->
                  <PLTYP></PLTYP>
                  <!--Optional:-->
                  <INCO1></INCO1>
                  <!--Optional:-->
                  <INCO2></INCO2>
                  <!--Optional:-->
                  <EXPKZ></EXPKZ>
                  <!--Optional:-->
                  <RFBSK></RFBSK>
                  <!--Optional:-->
                  <MRNKZ></MRNKZ>
                  <!--Optional:-->
                  <KURRF></KURRF>
                  <!--Optional:-->
                  <CPKUR></CPKUR>
                  <!--Optional:-->
                  <VALTG></VALTG>
                  <!--Optional:-->
                  <VALDT></VALDT>
                  <!--Optional:-->
                  <ZTERM></ZTERM>
                  <!--Optional:-->
                  <ZLSCH></ZLSCH>
                  <!--Optional:-->
                  <KTGRD></KTGRD>
                  <!--Optional:-->
                  <LAND1></LAND1>
                  <!--Optional:-->
                  <REGIO></REGIO>
                  <!--Optional:-->
                  <COUNC></COUNC>
                  <!--Optional:-->
                  <CITYC></CITYC>
                  <!--Optional:-->
                  <BUKRS></BUKRS>
                  <!--Optional:-->
                  <TAXK1></TAXK1>
                  <!--Optional:-->
                  <TAXK2></TAXK2>
                  <!--Optional:-->
                  <TAXK3></TAXK3>
                  <!--Optional:-->
                  <TAXK4></TAXK4>
                  <!--Optional:-->
                  <TAXK5></TAXK5>
                  <!--Optional:-->
                  <TAXK6></TAXK6>
                  <!--Optional:-->
                  <TAXK7></TAXK7>
                  <!--Optional:-->
                  <TAXK8></TAXK8>
                  <!--Optional:-->
                  <TAXK9></TAXK9>
                  <!--Optional:-->
                  <NETWR></NETWR>
                  <!--Optional:-->
                  <ZUKRI></ZUKRI>
                  <!--Optional:-->
                  <ERNAM></ERNAM>
                  <!--Optional:-->
                  <ERZET></ERZET>
                  <!--Optional:-->
                  <ERDAT></ERDAT>
                  <!--Optional:-->
                  <STAFO></STAFO>
                  <!--Optional:-->
                  <KUNRG></KUNRG>
                  <!--Optional:-->
                  <KUNAG></KUNAG>
                  <!--Optional:-->
                  <MABER></MABER>
                  <!--Optional:-->
                  <STWAE></STWAE>
                  <!--Optional:-->
                  <EXNUM></EXNUM>
                  <!--Optional:-->
                  <STCEG></STCEG>
                  <!--Optional:-->
                  <AEDAT></AEDAT>
                  <!--Optional:-->
                  <SFAKN></SFAKN>
                  <!--Optional:-->
                  <KNUMA></KNUMA>
                  <!--Optional:-->
                  <FKART_RL></FKART_RL>
                  <!--Optional:-->
                  <FKDAT_RL></FKDAT_RL>
                  <!--Optional:-->
                  <KURST></KURST>
                  <!--Optional:-->
                  <MSCHL></MSCHL>
                  <!--Optional:-->
                  <MANSP></MANSP>
                  <!--Optional:-->
                  <SPART></SPART>
                  <!--Optional:-->
                  <KKBER></KKBER>
                  <!--Optional:-->
                  <KNKLI></KNKLI>
                  <!--Optional:-->
                  <CMWAE></CMWAE>
                  <!--Optional:-->
                  <CMKUF></CMKUF>
                  <!--Optional:-->
                  <HITYP_PR></HITYP_PR>
                  <!--Optional:-->
                  <BSTNK_VF></BSTNK_VF>
                  <!--Optional:-->
                  <VBUND></VBUND>
                  <!--Optional:-->
                  <FKART_AB></FKART_AB>
                  <!--Optional:-->
                  <KAPPL></KAPPL>
                  <!--Optional:-->
                  <LANDTX></LANDTX>
                  <!--Optional:-->
                  <STCEG_H></STCEG_H>
                  <!--Optional:-->
                  <STCEG_L></STCEG_L>
                  <!--Optional:-->
                  <XBLNR></XBLNR>
                  <!--Optional:-->
                  <ZUONR></ZUONR>
                  <!--Optional:-->
                  <MWSBK></MWSBK>
                  <!--Optional:-->
                  <LOGSYS></LOGSYS>
                  <!--Optional:-->
                  <FKSTO></FKSTO>
                  <!--Optional:-->
                  <XEGDR></XEGDR>
                  <!--Optional:-->
                  <RPLNR></RPLNR>
                  <!--Optional:-->
                  <LCNUM></LCNUM>
                  <!--Optional:-->
                  <J_1AFITP></J_1AFITP>
                  <!--Optional:-->
                  <KURRF_DAT></KURRF_DAT>
                  <!--Optional:-->
                  <AKWAE></AKWAE>
                  <!--Optional:-->
                  <AKKUR></AKKUR>
                  <!--Optional:-->
                  <KIDNO></KIDNO>
                  <!--Optional:-->
                  <BVTYP></BVTYP>
                  <!--Optional:-->
                  <NUMPG></NUMPG>
                  <!--Optional:-->
                  <BUPLA></BUPLA>
                  <!--Optional:-->
                  <VKONT></VKONT>
                  <!--Optional:-->
                  <FKK_DOCSTAT></FKK_DOCSTAT>
                  <!--Optional:-->
                  <NRZAS></NRZAS>
                  <!--Optional:-->
                  <SPE_BILLING_IND></SPE_BILLING_IND>
                  <!--Optional:-->
                  <VTREF></VTREF>
                  <!--Optional:-->
                  <FK_SOURCE_SYS></FK_SOURCE_SYS>
                  <!--Optional:-->
                  <FKTYP_CRM></FKTYP_CRM>
                  <!--Optional:-->
                  <STGRD></STGRD>
                  <!--Optional:-->
                  <VBTYP_EXT></VBTYP_EXT>
                  <!--Optional:-->
                  <J_1TPBUPL></J_1TPBUPL>
                  <!--Optional:-->
                  <INCOV></INCOV>
                  <!--Optional:-->
                  <INCO2_L></INCO2_L>
                  <!--Optional:-->
                  <INCO3_L></INCO3_L>
                  <!--Optional:-->
                  <DPC_REL></DPC_REL>
                  <!--Optional:-->
                  <MNDID></MNDID>
                  <!--Optional:-->
                  <PAY_TYPE></PAY_TYPE>
                  <!--Optional:-->
                  <SEPON></SEPON>
                  <!--Optional:-->
                  <MNDVG></MNDVG>
                  <!--Optional:-->
                  <SPPAYM></SPPAYM>
                  <!--Optional:-->
                  <SPPORD></SPPORD>
               </item>
            </IT_CRDBMEMO_LIST>
         </urn:ZFM_CUST_CRDBMEMO_DS>
      </soapenv:Body>
   </soapenv:Envelope>`;
  var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_CP_DS&receiverParty=&receiverService=&interface=SI_CUST_CRDBMEMO_DS&interfaceNamespace=http://Cust_Portal_DS.com',
    'headers': {
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Content-Type': 'application/xml',
      'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyODA5MzMFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjI4MDkzMzUxWjAjBgkqhkiG9w0BCQQxFgQUoLmLWAodBVJhHYAVUG6q019ahzYwCQYHKoZIzjgEAwQvMC0CFQDvIYJJ7vyneKcbGzEVOYo3314ZUwIUfOOH6eyFWmifmW67A8Mc0LN3ws8%3D; JSESSIONID=iJzCkIY_qQTIkHMFEVvolYgA9aipgQF-Y2kA_SAPjwC-VGnqhzdyjoToeW9-XrAP; JSESSIONMARKID=1W5dNAbV6MEg6IFJg0tYd6Jw1La7wOxSkc4n5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: postData  
  };
    request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
        result1 = JSON.parse(result1);
        res.send(result1);
        console.log(result1);
      }
    });
  });


app.post("/profile", function (req, res) {
uname = req.body.uname;
pwd = req.body.pwd;
const postData =
    `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZFM_CUST_PROFILE_DS>
          <I_CUSTID>`+uname+`</I_CUSTID>
       </urn:ZFM_CUST_PROFILE_DS>
    </soapenv:Body>
 </soapenv:Envelope>`;
 var options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_CP_DS&receiverParty=&receiverService=&interface=SI_CUST_PROFILE_DS&interfaceNamespace=http://Cust_Portal_DS.com',
    'headers': {
      'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
      'Content-Type': 'application/xml',
      'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDYyODA5MzMFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNjI4MDkzMzUxWjAjBgkqhkiG9w0BCQQxFgQUoLmLWAodBVJhHYAVUG6q019ahzYwCQYHKoZIzjgEAwQvMC0CFQDvIYJJ7vyneKcbGzEVOYo3314ZUwIUfOOH6eyFWmifmW67A8Mc0LN3ws8%3D; JSESSIONID=iJzCkIY_qQTIkHMFEVvolYgA9aipgQF-Y2kA_SAPjwC-VGnqhzdyjoToeW9-XrAP; JSESSIONMARKID=1W5dNAbV6MEg6IFJg0tYd6Jw1La7wOxSkc4n5jaQA; saplb_*=(J2EE6906720)6906750'
    },
    body: postData,
};
request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
    var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
    result1 = JSON.parse(result1);
    res.send(result1);
    console.log(result1);
    }
});
});  


// VENDOR PORTAL

app.post("/vlogin", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_LOGIN_DS>
        <!--You may enter the following 2 items in any order-->
        <!--Optional:-->
        <I_PASSWORD>`+pwd+`</I_PASSWORD>
        <!--Optional:-->
        <I_VENDOR_ID>`+uname+`</I_VENDOR_ID>
     </urn:ZFM_VEN_LOGIN_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VEN_DS&receiverParty=&receiverService=&interface=SI_VEN_LOGIN_DS&interfaceNamespace=http://vendor_portal_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMzA3NDQFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAzMDc0NDQ5WjAjBgkqhkiG9w0BCQQxFgQUouF65b6ZXlDoMZy8XzPNIobRxNEwCQYHKoZIzjgEAwQwMC4CFQDvuW9uK9SfY87PwbzBCxLin%2FV%2FUQIVAKckNPCub0QlyFHOD9zFA6O4voLw; JSESSIONID=kMmADbY9WvvQQh2oLyv8X4_N7wTDgQF-Y2kA_SAPwrXCuYcQWfOa_3XDTQj4jalL; JSESSIONMARKID=ShCiLwIRY9EeGHqOUT6tjZbyYUT7KLEdVcTn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vcredit", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_CREDIT_DS>
        <!--You may enter the following 2 items in any order-->
        <VENDOR_ID>`+uname+`</VENDOR_ID>
        <IT_CREDIT>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <VENDOR></VENDOR>
              <!--Optional:-->
              <MATNR></MATNR>
              <!--Optional:-->
              <WERKS></WERKS>
              <!--Optional:-->
              <MENGE></MENGE>
              <!--Optional:-->
              <MEINS></MEINS>
              <!--Optional:-->
              <BUKRS></BUKRS>
              <!--Optional:-->
              <BELNR></BELNR>
              <!--Optional:-->
              <GJAHR></GJAHR>
              <!--Optional:-->
              <BUZEI></BUZEI>
              <!--Optional:-->
              <AUGDT></AUGDT>
              <!--Optional:-->
              <KOART></KOART>
              <!--Optional:-->
              <DMBTR></DMBTR>
              <!--Optional:-->
              <BDIFF></BDIFF>
              <!--Optional:-->
              <XBILK></XBILK>
           </item>
        </IT_CREDIT>
     </urn:ZFM_VEN_CREDIT_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VEN_DS&receiverParty=&receiverService=&interface=SI_VEN_CREDIT_DS&interfaceNamespace=http://vendor_portal_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMzA3NDQFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAzMDc0NDQ5WjAjBgkqhkiG9w0BCQQxFgQUouF65b6ZXlDoMZy8XzPNIobRxNEwCQYHKoZIzjgEAwQwMC4CFQDvuW9uK9SfY87PwbzBCxLin%2FV%2FUQIVAKckNPCub0QlyFHOD9zFA6O4voLw; JSESSIONID=kMmADbY9WvvQQh2oLyv8X4_N7wTDgQF-Y2kA_SAPwrXCuYcQWfOa_3XDTQj4jalL; JSESSIONMARKID=ShCiLwIRY9EeGHqOUT6tjZbyYUT7KLEdVcTn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vprofile", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_PROFILE_DS>
        <VENDOR_ID>`+uname+`</VENDOR_ID>
     </urn:ZFM_VEN_PROFILE_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VEN_DS&receiverParty=&receiverService=&interface=SI_VEN_PROFILE_DS&interfaceNamespace=http://vendor_portal_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMzA3NDQFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAzMDc0NDQ5WjAjBgkqhkiG9w0BCQQxFgQUouF65b6ZXlDoMZy8XzPNIobRxNEwCQYHKoZIzjgEAwQwMC4CFQDvuW9uK9SfY87PwbzBCxLin%2FV%2FUQIVAKckNPCub0QlyFHOD9zFA6O4voLw; JSESSIONID=kMmADbY9WvvQQh2oLyv8X4_N7wTDgQF-Y2kA_SAPwrXCuYcQWfOa_3XDTQj4jalL; JSESSIONMARKID=ShCiLwIRY9EeGHqOUT6tjZbyYUT7KLEdVcTn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vpayment", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_PAYMENTAGE_DS>
        <!--You may enter the following 2 items in any order-->
        <VENDORNUMBER>`+uname+`</VENDORNUMBER>
        <PAYMENTAGING_IT>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <BUKRS></BUKRS>
              <!--Optional:-->
              <ZUONR></ZUONR>
              <!--Optional:-->
              <BELNR></BELNR>
              <!--Optional:-->
              <BUDAT></BUDAT>
              <!--Optional:-->
              <BLDAT></BLDAT>
              <!--Optional:-->
              <CPUDT></CPUDT>
              <!--Optional:-->
              <WAERS></WAERS>
              <!--Optional:-->
              <XBLNR></XBLNR>
              <!--Optional:-->
              <BSCHL></BSCHL>
              <!--Optional:-->
              <SHKZG></SHKZG>
              <!--Optional:-->
              <DMBTR></DMBTR>
              <!--Optional:-->
              <WRBTR></WRBTR>
              <!--Optional:-->
              <ZFBDT></ZFBDT>
              <!--Optional:-->
              <SKFBT></SKFBT>
              <!--Optional:-->
              <PSWBT></PSWBT>
              <!--Optional:-->
              <PSWSL></PSWSL>
              <!--Optional:-->
              <AGING></AGING>
           </item>
        </PAYMENTAGING_IT>
     </urn:ZFM_VEN_PAYMENTAGE_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VEN_DS&receiverParty=&receiverService=&interface=SI_VEN_PAYMENTAGE_DS&interfaceNamespace=http://vendor_portal_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMzA3NDQFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAzMDc0NDQ5WjAjBgkqhkiG9w0BCQQxFgQUouF65b6ZXlDoMZy8XzPNIobRxNEwCQYHKoZIzjgEAwQwMC4CFQDvuW9uK9SfY87PwbzBCxLin%2FV%2FUQIVAKckNPCub0QlyFHOD9zFA6O4voLw; JSESSIONID=kMmADbY9WvvQQh2oLyv8X4_N7wTDgQF-Y2kA_SAPwrXCuYcQWfOa_3XDTQj4jalL; JSESSIONMARKID=ShCiLwIRY9EeGHqOUT6tjZbyYUT7KLEdVcTn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/Reqforpurchase", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_REQUEST_DS>
        <!--You may enter the following 2 items in any order-->
        <!--Optional:-->
        <I_VENDOR_ACC>5</I_VENDOR_ACC>
        <!--Optional:-->
        <IT_RFQ_LIST>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <PO_NUMBER></PO_NUMBER>
              <!--Optional:-->
              <CO_CODE></CO_CODE>
              <!--Optional:-->
              <DOC_CAT></DOC_CAT>
              <!--Optional:-->
              <DOC_TYPE></DOC_TYPE>
              <!--Optional:-->
              <CNTRL_IND></CNTRL_IND>
              <!--Optional:-->
              <DELETE_IND></DELETE_IND>
              <!--Optional:-->
              <STATUS></STATUS>
              <!--Optional:-->
              <CREATED_ON></CREATED_ON>
              <!--Optional:-->
              <CREATED_BY></CREATED_BY>
              <!--Optional:-->
              <ITEM_INTVL></ITEM_INTVL>
              <!--Optional:-->
              <LAST_ITEM></LAST_ITEM>
              <!--Optional:-->
              <VENDOR></VENDOR>
              <!--Optional:-->
              <LANGUAGE></LANGUAGE>
              <!--Optional:-->
              <PMNTTRMS></PMNTTRMS>
              <!--Optional:-->
              <DSCNT1_TO></DSCNT1_TO>
              <!--Optional:-->
              <DSCNT2_TO></DSCNT2_TO>
              <!--Optional:-->
              <DSCNT3_TO></DSCNT3_TO>
              <!--Optional:-->
              <CASH_DISC1></CASH_DISC1>
              <!--Optional:-->
              <CASH_DISC2></CASH_DISC2>
              <!--Optional:-->
              <PURCH_ORG></PURCH_ORG>
              <!--Optional:-->
              <PUR_GROUP></PUR_GROUP>
              <!--Optional:-->
              <CURRENCY></CURRENCY>
              <!--Optional:-->
              <EXCH_RATE></EXCH_RATE>
              <!--Optional:-->
              <EX_RATE_FX></EX_RATE_FX>
              <!--Optional:-->
              <DOC_DATE></DOC_DATE>
              <!--Optional:-->
              <VPER_START></VPER_START>
              <!--Optional:-->
              <VPER_END></VPER_END>
              <!--Optional:-->
              <APPLIC_BY></APPLIC_BY>
              <!--Optional:-->
              <QUOT_DEAD></QUOT_DEAD>
              <!--Optional:-->
              <BINDG_PER></BINDG_PER>
              <!--Optional:-->
              <WARRANTY></WARRANTY>
              <!--Optional:-->
              <BIDINV_NO></BIDINV_NO>
              <!--Optional:-->
              <QUOTATION></QUOTATION>
              <!--Optional:-->
              <QUOT_DATE></QUOT_DATE>
              <!--Optional:-->
              <REF_1></REF_1>
              <!--Optional:-->
              <SALES_PERS></SALES_PERS>
              <!--Optional:-->
              <TELEPHONE></TELEPHONE>
              <!--Optional:-->
              <SUPPL_VEND></SUPPL_VEND>
              <!--Optional:-->
              <CUSTOMER></CUSTOMER>
              <!--Optional:-->
              <AGREEMENT></AGREEMENT>
              <!--Optional:-->
              <REJ_REASON></REJ_REASON>
              <!--Optional:-->
              <COMPL_DLV></COMPL_DLV>
              <!--Optional:-->
              <GR_MESSAGE></GR_MESSAGE>
              <!--Optional:-->
              <SUPPL_PLNT></SUPPL_PLNT>
              <!--Optional:-->
              <RCVG_VEND></RCVG_VEND>
              <!--Optional:-->
              <INCOTERMS1></INCOTERMS1>
              <!--Optional:-->
              <INCOTERMS2></INCOTERMS2>
              <!--Optional:-->
              <TARGET_VAL></TARGET_VAL>
              <!--Optional:-->
              <COLL_NO></COLL_NO>
              <!--Optional:-->
              <DOC_COND></DOC_COND>
              <!--Optional:-->
              <PROCEDURE></PROCEDURE>
              <!--Optional:-->
              <UPDATE_GRP></UPDATE_GRP>
              <!--Optional:-->
              <DIFF_INV></DIFF_INV>
              <!--Optional:-->
              <EXPORT_NO></EXPORT_NO>
              <!--Optional:-->
              <OUR_REF></OUR_REF>
              <!--Optional:-->
              <LOGSYSTEM></LOGSYSTEM>
              <!--Optional:-->
              <SUBITEMINT></SUBITEMINT>
              <!--Optional:-->
              <MAST_COND></MAST_COND>
              <!--Optional:-->
              <REL_GROUP></REL_GROUP>
              <!--Optional:-->
              <REL_STRAT></REL_STRAT>
              <!--Optional:-->
              <REL_IND></REL_IND>
              <!--Optional:-->
              <REL_STATUS></REL_STATUS>
              <!--Optional:-->
              <SUBJ_TO_R></SUBJ_TO_R>
              <!--Optional:-->
              <TAXR_CNTRY></TAXR_CNTRY>
              <!--Optional:-->
              <SCHED_IND></SCHED_IND>
              <!--Optional:-->
              <VEND_NAME></VEND_NAME>
              <!--Optional:-->
              <CURRENCY_ISO></CURRENCY_ISO>
              <!--Optional:-->
              <EXCH_RATE_CM></EXCH_RATE_CM>
              <!--Optional:-->
              <HOLD></HOLD>
           </item>
        </IT_RFQ_LIST>
     </urn:ZFM_VEN_REQUEST_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VEN_DS&receiverParty=&receiverService=&interface=SI_VEN_REQUEST_DS&interfaceNamespace=http://vendor_portal_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMzA3NDQFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAzMDc0NDQ5WjAjBgkqhkiG9w0BCQQxFgQUouF65b6ZXlDoMZy8XzPNIobRxNEwCQYHKoZIzjgEAwQwMC4CFQDvuW9uK9SfY87PwbzBCxLin%2FV%2FUQIVAKckNPCub0QlyFHOD9zFA6O4voLw; JSESSIONID=kMmADbY9WvvQQh2oLyv8X4_N7wTDgQF-Y2kA_SAPwrXCuYcQWfOa_3XDTQj4jalL; JSESSIONMARKID=ShCiLwIRY9EeGHqOUT6tjZbyYUT7KLEdVcTn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/GoodsReceipt", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_GOODS_DS>
        <!--You may enter the following 4 items in any order-->
        <VENDOR_ID>`+uname+`</VENDOR_ID>
        <T_GOODS_HEAD>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <MAT_DOC></MAT_DOC>
              <!--Optional:-->
              <DOC_YEAR></DOC_YEAR>
              <!--Optional:-->
              <TR_EV_TYPE></TR_EV_TYPE>
              <!--Optional:-->
              <DOC_DATE></DOC_DATE>
              <!--Optional:-->
              <PSTNG_DATE></PSTNG_DATE>
              <!--Optional:-->
              <ENTRY_DATE></ENTRY_DATE>
              <!--Optional:-->
              <ENTRY_TIME></ENTRY_TIME>
              <!--Optional:-->
              <USERNAME></USERNAME>
              <!--Optional:-->
              <VER_GR_GI_SLIP></VER_GR_GI_SLIP>
              <!--Optional:-->
              <EXPIMP_NO></EXPIMP_NO>
              <!--Optional:-->
              <REF_DOC_NO></REF_DOC_NO>
              <!--Optional:-->
              <HEADER_TXT></HEADER_TXT>
              <!--Optional:-->
              <REF_DOC_NO_LONG></REF_DOC_NO_LONG>
           </item>
        </T_GOODS_HEAD>
        <T_GOODS_VALUES>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <MAT_DOC></MAT_DOC>
              <!--Optional:-->
              <DOC_YEAR></DOC_YEAR>
              <!--Optional:-->
              <MATDOC_ITM></MATDOC_ITM>
              <!--Optional:-->
              <MATERIAL></MATERIAL>
              <!--Optional:-->
              <PLANT></PLANT>
              <!--Optional:-->
              <STGE_LOC></STGE_LOC>
              <!--Optional:-->
              <BATCH></BATCH>
              <!--Optional:-->
              <MOVE_TYPE></MOVE_TYPE>
              <!--Optional:-->
              <STCK_TYPE></STCK_TYPE>
              <!--Optional:-->
              <SPEC_STOCK></SPEC_STOCK>
              <!--Optional:-->
              <VENDOR></VENDOR>
              <!--Optional:-->
              <CUSTOMER></CUSTOMER>
              <!--Optional:-->
              <SALES_ORD></SALES_ORD>
              <!--Optional:-->
              <S_ORD_ITEM></S_ORD_ITEM>
              <!--Optional:-->
              <SCHED_LINE></SCHED_LINE>
              <!--Optional:-->
              <VAL_TYPE></VAL_TYPE>
              <!--Optional:-->
              <ENTRY_QNT></ENTRY_QNT>
              <!--Optional:-->
              <ENTRY_UOM></ENTRY_UOM>
              <!--Optional:-->
              <ENTRY_UOM_ISO></ENTRY_UOM_ISO>
              <!--Optional:-->
              <PO_PR_QNT></PO_PR_QNT>
              <!--Optional:-->
              <ORDERPR_UN></ORDERPR_UN>
              <!--Optional:-->
              <ORDERPR_UN_ISO></ORDERPR_UN_ISO>
              <!--Optional:-->
              <PO_NUMBER></PO_NUMBER>
              <!--Optional:-->
              <PO_ITEM></PO_ITEM>
              <!--Optional:-->
              <SHIPPING></SHIPPING>
              <!--Optional:-->
              <COMP_SHIP></COMP_SHIP>
              <!--Optional:-->
              <NO_MORE_GR></NO_MORE_GR>
              <!--Optional:-->
              <ITEM_TEXT></ITEM_TEXT>
              <!--Optional:-->
              <GR_RCPT></GR_RCPT>
              <!--Optional:-->
              <UNLOAD_PT></UNLOAD_PT>
              <!--Optional:-->
              <COSTCENTER></COSTCENTER>
              <!--Optional:-->
              <ORDERID></ORDERID>
              <!--Optional:-->
              <ORDER_ITNO></ORDER_ITNO>
              <!--Optional:-->
              <CALC_MOTIVE></CALC_MOTIVE>
              <!--Optional:-->
              <ASSET_NO></ASSET_NO>
              <!--Optional:-->
              <SUB_NUMBER></SUB_NUMBER>
              <!--Optional:-->
              <RESERV_NO></RESERV_NO>
              <!--Optional:-->
              <RES_ITEM></RES_ITEM>
              <!--Optional:-->
              <RES_TYPE></RES_TYPE>
              <!--Optional:-->
              <WITHDRAWN></WITHDRAWN>
              <!--Optional:-->
              <MOVE_MAT></MOVE_MAT>
              <!--Optional:-->
              <MOVE_PLANT></MOVE_PLANT>
              <!--Optional:-->
              <MOVE_STLOC></MOVE_STLOC>
              <!--Optional:-->
              <MOVE_BATCH></MOVE_BATCH>
              <!--Optional:-->
              <MOVE_VAL_TYPE></MOVE_VAL_TYPE>
              <!--Optional:-->
              <MVT_IND></MVT_IND>
              <!--Optional:-->
              <MOVE_REAS></MOVE_REAS>
              <!--Optional:-->
              <RL_EST_KEY></RL_EST_KEY>
              <!--Optional:-->
              <REF_DATE></REF_DATE>
              <!--Optional:-->
              <COST_OBJ></COST_OBJ>
              <!--Optional:-->
              <PROFIT_SEGM_NO></PROFIT_SEGM_NO>
              <!--Optional:-->
              <PROFIT_CTR></PROFIT_CTR>
              <!--Optional:-->
              <WBS_ELEM></WBS_ELEM>
              <!--Optional:-->
              <NETWORK></NETWORK>
              <!--Optional:-->
              <ACTIVITY></ACTIVITY>
              <!--Optional:-->
              <PART_ACCT></PART_ACCT>
              <!--Optional:-->
              <AMOUNT_LC></AMOUNT_LC>
              <!--Optional:-->
              <AMOUNT_SV></AMOUNT_SV>
              <!--Optional:-->
              <CURRENCY></CURRENCY>
              <!--Optional:-->
              <CURRENCY_ISO></CURRENCY_ISO>
              <!--Optional:-->
              <REF_DOC_YR></REF_DOC_YR>
              <!--Optional:-->
              <REF_DOC></REF_DOC>
              <!--Optional:-->
              <REF_DOC_IT></REF_DOC_IT>
              <!--Optional:-->
              <EXPIRYDATE></EXPIRYDATE>
              <!--Optional:-->
              <PROD_DATE></PROD_DATE>
              <!--Optional:-->
              <FUND></FUND>
              <!--Optional:-->
              <FUNDS_CTR></FUNDS_CTR>
              <!--Optional:-->
              <CMMT_ITEM></CMMT_ITEM>
              <!--Optional:-->
              <VAL_SALES_ORD></VAL_SALES_ORD>
              <!--Optional:-->
              <VAL_S_ORD_ITEM></VAL_S_ORD_ITEM>
              <!--Optional:-->
              <VAL_WBS_ELEM></VAL_WBS_ELEM>
              <!--Optional:-->
              <CO_BUSPROC></CO_BUSPROC>
              <!--Optional:-->
              <ACTTYPE></ACTTYPE>
              <!--Optional:-->
              <SUPPL_VEND></SUPPL_VEND>
              <!--Optional:-->
              <X_AUTO_CRE></X_AUTO_CRE>
              <!--Optional:-->
              <MATERIAL_EXTERNAL></MATERIAL_EXTERNAL>
              <!--Optional:-->
              <MATERIAL_GUID></MATERIAL_GUID>
              <!--Optional:-->
              <MATERIAL_VERSION></MATERIAL_VERSION>
              <!--Optional:-->
              <MOVE_MAT_EXTERNAL></MOVE_MAT_EXTERNAL>
              <!--Optional:-->
              <MOVE_MAT_GUID></MOVE_MAT_GUID>
              <!--Optional:-->
              <MOVE_MAT_VERSION></MOVE_MAT_VERSION>
              <!--Optional:-->
              <GRANT_NBR></GRANT_NBR>
              <!--Optional:-->
              <CMMT_ITEM_LONG></CMMT_ITEM_LONG>
              <!--Optional:-->
              <FUNC_AREA_LONG></FUNC_AREA_LONG>
              <!--Optional:-->
              <LINE_ID></LINE_ID>
              <!--Optional:-->
              <PARENT_ID></PARENT_ID>
              <!--Optional:-->
              <LINE_DEPTH></LINE_DEPTH>
              <!--Optional:-->
              <BUDGET_PERIOD></BUDGET_PERIOD>
              <!--Optional:-->
              <EARMARKED_NUMBER></EARMARKED_NUMBER>
              <!--Optional:-->
              <EARMARKED_ITEM></EARMARKED_ITEM>
              <!--Optional:-->
              <STK_SEGMENT></STK_SEGMENT>
              <!--Optional:-->
              <MATERIAL_LONG></MATERIAL_LONG>
              <!--Optional:-->
              <MOVE_MAT_LONG></MOVE_MAT_LONG>
           </item>
        </T_GOODS_VALUES>
        <T_OUT>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <TYPE></TYPE>
              <!--Optional:-->
              <ID></ID>
              <!--Optional:-->
              <NUMBER></NUMBER>
              <!--Optional:-->
              <MESSAGE></MESSAGE>
              <!--Optional:-->
              <LOG_NO></LOG_NO>
              <!--Optional:-->
              <LOG_MSG_NO></LOG_MSG_NO>
              <!--Optional:-->
              <MESSAGE_V1></MESSAGE_V1>
              <!--Optional:-->
              <MESSAGE_V2></MESSAGE_V2>
              <!--Optional:-->
              <MESSAGE_V3></MESSAGE_V3>
              <!--Optional:-->
              <MESSAGE_V4></MESSAGE_V4>
              <!--Optional:-->
              <PARAMETER></PARAMETER>
              <!--Optional:-->
              <ROW></ROW>
              <!--Optional:-->
              <FIELD></FIELD>
              <!--Optional:-->
              <SYSTEM></SYSTEM>
           </item>
        </T_OUT>
     </urn:ZFM_VEN_GOODS_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VEN_DS&receiverParty=&receiverService=&interface=SI_VEN_GOODS_DS&interfaceNamespace=http://vendor_portal_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMzA3NDQFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAzMDc0NDQ5WjAjBgkqhkiG9w0BCQQxFgQUouF65b6ZXlDoMZy8XzPNIobRxNEwCQYHKoZIzjgEAwQwMC4CFQDvuW9uK9SfY87PwbzBCxLin%2FV%2FUQIVAKckNPCub0QlyFHOD9zFA6O4voLw; JSESSIONID=kMmADbY9WvvQQh2oLyv8X4_N7wTDgQF-Y2kA_SAPwrXCuYcQWfOa_3XDTQj4jalL; JSESSIONMARKID=ShCiLwIRY9EeGHqOUT6tjZbyYUT7KLEdVcTn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vdebit", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_DEBIT_DS>
        <!--You may enter the following 2 items in any order-->
        <VENDOR_ID>`+uname+`</VENDOR_ID>
        <IT_DEBIT>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <VENDOR></VENDOR>
              <!--Optional:-->
              <MATNR></MATNR>
              <!--Optional:-->
              <WERKS></WERKS>
              <!--Optional:-->
              <MENGE></MENGE>
              <!--Optional:-->
              <MEINS></MEINS>
              <!--Optional:-->
              <BUKRS></BUKRS>
              <!--Optional:-->
              <BELNR></BELNR>
              <!--Optional:-->
              <GJAHR></GJAHR>
              <!--Optional:-->
              <BUZEI></BUZEI>
              <!--Optional:-->
              <AUGDT></AUGDT>
              <!--Optional:-->
              <KOART></KOART>
              <!--Optional:-->
              <DMBTR></DMBTR>
              <!--Optional:-->
              <BDIFF></BDIFF>
              <!--Optional:-->
              <XBILK></XBILK>
           </item>
        </IT_DEBIT>
     </urn:ZFM_VEN_DEBIT_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VEN_DS&receiverParty=&receiverService=&interface=SI_VEN_DEBIT_DS&interfaceNamespace=http://vendor_portal_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMzA3NDQFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAzMDc0NDQ5WjAjBgkqhkiG9w0BCQQxFgQUouF65b6ZXlDoMZy8XzPNIobRxNEwCQYHKoZIzjgEAwQwMC4CFQDvuW9uK9SfY87PwbzBCxLin%2FV%2FUQIVAKckNPCub0QlyFHOD9zFA6O4voLw; JSESSIONID=kMmADbY9WvvQQh2oLyv8X4_N7wTDgQF-Y2kA_SAPwrXCuYcQWfOa_3XDTQj4jalL; JSESSIONMARKID=ShCiLwIRY9EeGHqOUT6tjZbyYUT7KLEdVcTn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/vinvoice", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_INVOICE_DS>
        <VENDORID>`+uname+`</VENDORID>
     </urn:ZFM_VEN_INVOICE_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VEN_DS&receiverParty=&receiverService=&interface=SI_VEN_INVOICE_DS&interfaceNamespace=http://vendor_portal_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMzA3NDQFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAzMDc0NDQ5WjAjBgkqhkiG9w0BCQQxFgQUouF65b6ZXlDoMZy8XzPNIobRxNEwCQYHKoZIzjgEAwQwMC4CFQDvuW9uK9SfY87PwbzBCxLin%2FV%2FUQIVAKckNPCub0QlyFHOD9zFA6O4voLw; JSESSIONID=kMmADbY9WvvQQh2oLyv8X4_N7wTDgQF-Y2kA_SAPwrXCuYcQWfOa_3XDTQj4jalL; JSESSIONMARKID=ShCiLwIRY9EeGHqOUT6tjZbyYUT7KLEdVcTn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

app.post("/purchase", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_VEN_PURCHASE_DS>
        <!--You may enter the following 3 items in any order-->
        <I_VENDOR_ACC>5</I_VENDOR_ACC>
        <IT_PURCHASE_HEAD>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <PO_NUMBER></PO_NUMBER>
              <!--Optional:-->
              <CO_CODE></CO_CODE>
              <!--Optional:-->
              <DOC_CAT></DOC_CAT>
              <!--Optional:-->
              <DOC_TYPE></DOC_TYPE>
              <!--Optional:-->
              <CNTRL_IND></CNTRL_IND>
              <!--Optional:-->
              <DELETE_IND></DELETE_IND>
              <!--Optional:-->
              <STATUS></STATUS>
              <!--Optional:-->
              <CREATED_ON></CREATED_ON>
              <!--Optional:-->
              <CREATED_BY></CREATED_BY>
              <!--Optional:-->
              <ITEM_INTVL></ITEM_INTVL>
              <!--Optional:-->
              <LAST_ITEM></LAST_ITEM>
              <!--Optional:-->
              <VENDOR></VENDOR>
              <!--Optional:-->
              <LANGUAGE></LANGUAGE>
              <!--Optional:-->
              <PMNTTRMS></PMNTTRMS>
              <!--Optional:-->
              <DSCNT1_TO></DSCNT1_TO>
              <!--Optional:-->
              <DSCNT2_TO></DSCNT2_TO>
              <!--Optional:-->
              <DSCNT3_TO></DSCNT3_TO>
              <!--Optional:-->
              <CASH_DISC1></CASH_DISC1>
              <!--Optional:-->
              <CASH_DISC2></CASH_DISC2>
              <!--Optional:-->
              <PURCH_ORG></PURCH_ORG>
              <!--Optional:-->
              <PUR_GROUP></PUR_GROUP>
              <!--Optional:-->
              <CURRENCY></CURRENCY>
              <!--Optional:-->
              <EXCH_RATE></EXCH_RATE>
              <!--Optional:-->
              <EX_RATE_FX></EX_RATE_FX>
              <!--Optional:-->
              <DOC_DATE></DOC_DATE>
              <!--Optional:-->
              <VPER_START></VPER_START>
              <!--Optional:-->
              <VPER_END></VPER_END>
              <!--Optional:-->
              <APPLIC_BY></APPLIC_BY>
              <!--Optional:-->
              <QUOT_DEAD></QUOT_DEAD>
              <!--Optional:-->
              <BINDG_PER></BINDG_PER>
              <!--Optional:-->
              <WARRANTY></WARRANTY>
              <!--Optional:-->
              <BIDINV_NO></BIDINV_NO>
              <!--Optional:-->
              <QUOTATION></QUOTATION>
              <!--Optional:-->
              <QUOT_DATE></QUOT_DATE>
              <!--Optional:-->
              <REF_1></REF_1>
              <!--Optional:-->
              <SALES_PERS></SALES_PERS>
              <!--Optional:-->
              <TELEPHONE></TELEPHONE>
              <!--Optional:-->
              <SUPPL_VEND></SUPPL_VEND>
              <!--Optional:-->
              <CUSTOMER></CUSTOMER>
              <!--Optional:-->
              <AGREEMENT></AGREEMENT>
              <!--Optional:-->
              <REJ_REASON></REJ_REASON>
              <!--Optional:-->
              <COMPL_DLV></COMPL_DLV>
              <!--Optional:-->
              <GR_MESSAGE></GR_MESSAGE>
              <!--Optional:-->
              <SUPPL_PLNT></SUPPL_PLNT>
              <!--Optional:-->
              <RCVG_VEND></RCVG_VEND>
              <!--Optional:-->
              <INCOTERMS1></INCOTERMS1>
              <!--Optional:-->
              <INCOTERMS2></INCOTERMS2>
              <!--Optional:-->
              <TARGET_VAL></TARGET_VAL>
              <!--Optional:-->
              <COLL_NO></COLL_NO>
              <!--Optional:-->
              <DOC_COND></DOC_COND>
              <!--Optional:-->
              <PROCEDURE></PROCEDURE>
              <!--Optional:-->
              <UPDATE_GRP></UPDATE_GRP>
              <!--Optional:-->
              <DIFF_INV></DIFF_INV>
              <!--Optional:-->
              <EXPORT_NO></EXPORT_NO>
              <!--Optional:-->
              <OUR_REF></OUR_REF>
              <!--Optional:-->
              <LOGSYSTEM></LOGSYSTEM>
              <!--Optional:-->
              <SUBITEMINT></SUBITEMINT>
              <!--Optional:-->
              <MAST_COND></MAST_COND>
              <!--Optional:-->
              <REL_GROUP></REL_GROUP>
              <!--Optional:-->
              <REL_STRAT></REL_STRAT>
              <!--Optional:-->
              <REL_IND></REL_IND>
              <!--Optional:-->
              <REL_STATUS></REL_STATUS>
              <!--Optional:-->
              <SUBJ_TO_R></SUBJ_TO_R>
              <!--Optional:-->
              <TAXR_CNTRY></TAXR_CNTRY>
              <!--Optional:-->
              <SCHED_IND></SCHED_IND>
              <!--Optional:-->
              <VEND_NAME></VEND_NAME>
              <!--Optional:-->
              <CURRENCY_ISO></CURRENCY_ISO>
              <!--Optional:-->
              <EXCH_RATE_CM></EXCH_RATE_CM>
              <!--Optional:-->
              <HOLD></HOLD>
           </item>
        </IT_PURCHASE_HEAD>
        <IT_PURCHASE_VALUES>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <PO_NUMBER></PO_NUMBER>
              <!--Optional:-->
              <PO_ITEM></PO_ITEM>
              <!--Optional:-->
              <DELETE_IND></DELETE_IND>
              <!--Optional:-->
              <STATUS></STATUS>
              <!--Optional:-->
              <CHANGED_ON></CHANGED_ON>
              <!--Optional:-->
              <SHORT_TEXT></SHORT_TEXT>
              <!--Optional:-->
              <MATERIAL></MATERIAL>
              <!--Optional:-->
              <PUR_MAT></PUR_MAT>
              <!--Optional:-->
              <CO_CODE></CO_CODE>
              <!--Optional:-->
              <PLANT></PLANT>
              <!--Optional:-->
              <STORE_LOC></STORE_LOC>
              <!--Optional:-->
              <TRACKINGNO></TRACKINGNO>
              <!--Optional:-->
              <MAT_GRP></MAT_GRP>
              <!--Optional:-->
              <INFO_REC></INFO_REC>
              <!--Optional:-->
              <VEND_MAT></VEND_MAT>
              <!--Optional:-->
              <TARGET_QTY></TARGET_QTY>
              <!--Optional:-->
              <QUANTITY></QUANTITY>
              <!--Optional:-->
              <UNIT></UNIT>
              <!--Optional:-->
              <ORDERPR_UN></ORDERPR_UN>
              <!--Optional:-->
              <CONV_NUM1></CONV_NUM1>
              <!--Optional:-->
              <CONV_DEN1></CONV_DEN1>
              <!--Optional:-->
              <CONV_NUM2></CONV_NUM2>
              <!--Optional:-->
              <CONV_DEN2></CONV_DEN2>
              <!--Optional:-->
              <NET_PRICE></NET_PRICE>
              <!--Optional:-->
              <PRICE_UNIT></PRICE_UNIT>
              <!--Optional:-->
              <NET_VALUE></NET_VALUE>
              <!--Optional:-->
              <GROS_VALUE></GROS_VALUE>
              <!--Optional:-->
              <QUOT_DEAD></QUOT_DEAD>
              <!--Optional:-->
              <GR_PR_TIME></GR_PR_TIME>
              <!--Optional:-->
              <TAX_CODE></TAX_CODE>
              <!--Optional:-->
              <SETT_GRP1></SETT_GRP1>
              <!--Optional:-->
              <QUAL_INSP></QUAL_INSP>
              <!--Optional:-->
              <INFO_UPD></INFO_UPD>
              <!--Optional:-->
              <PRNT_PRICE></PRNT_PRICE>
              <!--Optional:-->
              <EST_PRICE></EST_PRICE>
              <!--Optional:-->
              <NUM_REMIND></NUM_REMIND>
              <!--Optional:-->
              <REMINDER1></REMINDER1>
              <!--Optional:-->
              <REMINDER2></REMINDER2>
              <!--Optional:-->
              <REMINDER3></REMINDER3>
              <!--Optional:-->
              <OVERDELTOL></OVERDELTOL>
              <!--Optional:-->
              <UNLIMITED></UNLIMITED>
              <!--Optional:-->
              <UNDER_TOL></UNDER_TOL>
              <!--Optional:-->
              <VAL_TYPE></VAL_TYPE>
              <!--Optional:-->
              <VAL_CAT></VAL_CAT>
              <!--Optional:-->
              <REJ_IND></REJ_IND>
              <!--Optional:-->
              <COMMENT></COMMENT>
              <!--Optional:-->
              <DEL_COMPL></DEL_COMPL>
              <!--Optional:-->
              <FINAL_INV></FINAL_INV>
              <!--Optional:-->
              <ITEM_CAT></ITEM_CAT>
              <!--Optional:-->
              <ACCTASSCAT></ACCTASSCAT>
              <!--Optional:-->
              <CONSUMPT></CONSUMPT>
              <!--Optional:-->
              <DISTRIB></DISTRIB>
              <!--Optional:-->
              <PART_INV></PART_INV>
              <!--Optional:-->
              <GR_IND></GR_IND>
              <!--Optional:-->
              <GR_NON_VAL></GR_NON_VAL>
              <!--Optional:-->
              <IR_IND></IR_IND>
              <!--Optional:-->
              <GR_BASEDIV></GR_BASEDIV>
              <!--Optional:-->
              <ACKN_REQD></ACKN_REQD>
              <!--Optional:-->
              <ACKNOWL_NO></ACKNOWL_NO>
              <!--Optional:-->
              <AGREEMENT></AGREEMENT>
              <!--Optional:-->
              <AGMT_ITEM></AGMT_ITEM>
              <!--Optional:-->
              <RECON_DATE></RECON_DATE>
              <!--Optional:-->
              <AGRCUMQTY></AGRCUMQTY>
              <!--Optional:-->
              <FIRM_ZONE></FIRM_ZONE>
              <!--Optional:-->
              <TRADE_OFF></TRADE_OFF>
              <!--Optional:-->
              <BOM_EXPL></BOM_EXPL>
              <!--Optional:-->
              <EXCLUSION></EXCLUSION>
              <!--Optional:-->
              <BASE_UNIT></BASE_UNIT>
              <!--Optional:-->
              <SHIPPING></SHIPPING>
              <!--Optional:-->
              <OUTL_TARGV></OUTL_TARGV>
              <!--Optional:-->
              <NOND_ITAX></NOND_ITAX>
              <!--Optional:-->
              <RELORD_QTY></RELORD_QTY>
              <!--Optional:-->
              <PRICE_DATE></PRICE_DATE>
              <!--Optional:-->
              <DOC_CAT></DOC_CAT>
              <!--Optional:-->
              <EFF_VALUE></EFF_VALUE>
              <!--Optional:-->
              <COMMITMENT></COMMITMENT>
              <!--Optional:-->
              <CUSTOMER></CUSTOMER>
              <!--Optional:-->
              <ADDRESS></ADDRESS>
              <!--Optional:-->
              <COND_GROUP></COND_GROUP>
              <!--Optional:-->
              <NO_C_DISC></NO_C_DISC>
              <!--Optional:-->
              <UPDATE_GRP></UPDATE_GRP>
              <!--Optional:-->
              <PLAN_DEL></PLAN_DEL>
              <!--Optional:-->
              <NET_WEIGHT></NET_WEIGHT>
              <!--Optional:-->
              <WEIGHTUNIT></WEIGHTUNIT>
              <!--Optional:-->
              <TAX_JUR_CD></TAX_JUR_CD>
              <!--Optional:-->
              <PRINT_REL></PRINT_REL>
              <!--Optional:-->
              <SPEC_STOCK></SPEC_STOCK>
              <!--Optional:-->
              <SETRESERNO></SETRESERNO>
              <!--Optional:-->
              <SETTLITMNO></SETTLITMNO>
              <!--Optional:-->
              <NOT_CHGBL></NOT_CHGBL>
              <!--Optional:-->
              <CTR_KEY_QM></CTR_KEY_QM>
              <!--Optional:-->
              <CERT_TYPE></CERT_TYPE>
              <!--Optional:-->
              <EAN_UPC></EAN_UPC>
              <!--Optional:-->
              <CONF_CTRL></CONF_CTRL>
              <!--Optional:-->
              <REV_LEV></REV_LEV>
              <!--Optional:-->
              <FUND></FUND>
              <!--Optional:-->
              <FUNDS_CTR></FUNDS_CTR>
              <!--Optional:-->
              <CMMT_ITEM></CMMT_ITEM>
              <!--Optional:-->
              <BA_PARTNER></BA_PARTNER>
              <!--Optional:-->
              <PTR_ASS_BA></PTR_ASS_BA>
              <!--Optional:-->
              <PROFIT_CTR></PROFIT_CTR>
              <!--Optional:-->
              <PARTNER_PC></PARTNER_PC>
              <!--Optional:-->
              <PRICE_CTR></PRICE_CTR>
              <!--Optional:-->
              <GROSS_WGHT></GROSS_WGHT>
              <!--Optional:-->
              <VOLUME></VOLUME>
              <!--Optional:-->
              <VOLUMEUNIT></VOLUMEUNIT>
              <!--Optional:-->
              <INCOTERMS1></INCOTERMS1>
              <!--Optional:-->
              <INCOTERMS2></INCOTERMS2>
              <!--Optional:-->
              <ADVANCE></ADVANCE>
              <!--Optional:-->
              <PRIOR_VEND></PRIOR_VEND>
              <!--Optional:-->
              <SUB_RANGE></SUB_RANGE>
              <!--Optional:-->
              <PCKG_NO></PCKG_NO>
              <!--Optional:-->
              <STATISTIC></STATISTIC>
              <!--Optional:-->
              <HL_ITEM></HL_ITEM>
              <!--Optional:-->
              <GR_TO_DATE></GR_TO_DATE>
              <!--Optional:-->
              <SUPPL_VEND></SUPPL_VEND>
              <!--Optional:-->
              <SC_VENDOR></SC_VENDOR>
              <!--Optional:-->
              <CONF_MATL></CONF_MATL>
              <!--Optional:-->
              <MAT_CAT></MAT_CAT>
              <!--Optional:-->
              <KANBAN_IND></KANBAN_IND>
              <!--Optional:-->
              <ADDRESS2></ADDRESS2>
              <!--Optional:-->
              <INT_OBJ_NO></INT_OBJ_NO>
              <!--Optional:-->
              <ERS></ERS>
              <!--Optional:-->
              <GRSETTFROM></GRSETTFROM>
              <!--Optional:-->
              <LAST_TRANS></LAST_TRANS>
              <!--Optional:-->
              <TRANS_TIME></TRANS_TIME>
              <!--Optional:-->
              <SER_NO></SER_NO>
              <!--Optional:-->
              <PROMOTION></PROMOTION>
              <!--Optional:-->
              <ALLOC_TBL></ALLOC_TBL>
              <!--Optional:-->
              <AT_ITEM></AT_ITEM>
              <!--Optional:-->
              <POINTS></POINTS>
              <!--Optional:-->
              <POINTS_UN></POINTS_UN>
              <!--Optional:-->
              <SEASON_TY></SEASON_TY>
              <!--Optional:-->
              <SEASON_YR></SEASON_YR>
              <!--Optional:-->
              <SETT_GRP_2></SETT_GRP_2>
              <!--Optional:-->
              <SETT_GRP_3></SETT_GRP_3>
              <!--Optional:-->
              <SETT_ITEM></SETT_ITEM>
              <!--Optional:-->
              <ML_AKT></ML_AKT>
              <!--Optional:-->
              <REMSHLIFE></REMSHLIFE>
              <!--Optional:-->
              <RFQ></RFQ>
              <!--Optional:-->
              <RFQ_ITEM></RFQ_ITEM>
              <!--Optional:-->
              <CONFIG_ORG></CONFIG_ORG>
              <!--Optional:-->
              <QUOTAUSAGE></QUOTAUSAGE>
              <!--Optional:-->
              <SPSTCK_PHY></SPSTCK_PHY>
              <!--Optional:-->
              <PREQ_NO></PREQ_NO>
              <!--Optional:-->
              <PREQ_ITEM></PREQ_ITEM>
              <!--Optional:-->
              <MAT_TYPE></MAT_TYPE>
              <!--Optional:-->
              <SI_CAT></SI_CAT>
              <!--Optional:-->
              <SUB_ITEMS></SUB_ITEMS>
              <!--Optional:-->
              <SUBTOTAL_1></SUBTOTAL_1>
              <!--Optional:-->
              <SUBTOTAL_2></SUBTOTAL_2>
              <!--Optional:-->
              <SUBTOTAL_3></SUBTOTAL_3>
              <!--Optional:-->
              <SUBTOTAL_4></SUBTOTAL_4>
              <!--Optional:-->
              <SUBTOTAL_5></SUBTOTAL_5>
              <!--Optional:-->
              <SUBTOTAL_6></SUBTOTAL_6>
              <!--Optional:-->
              <SUBITM_KEY></SUBITM_KEY>
              <!--Optional:-->
              <MAX_CMG></MAX_CMG>
              <!--Optional:-->
              <MAX_CPGO></MAX_CPGO>
              <!--Optional:-->
              <RET_ITEM></RET_ITEM>
              <!--Optional:-->
              <AT_RELEV></AT_RELEV>
              <!--Optional:-->
              <ORD_REAS></ORD_REAS>
              <!--Optional:-->
              <DEL_TYP_RT></DEL_TYP_RT>
              <!--Optional:-->
              <PRDTE_CTRL></PRDTE_CTRL>
              <!--Optional:-->
              <MANUF_PROF></MANUF_PROF>
              <!--Optional:-->
              <MANU_MAT></MANU_MAT>
              <!--Optional:-->
              <MFR_NO></MFR_NO>
              <!--Optional:-->
              <MFR_NO_EXT></MFR_NO_EXT>
              <!--Optional:-->
              <ITEM_CAT_EXT></ITEM_CAT_EXT>
              <!--Optional:-->
              <PO_UNIT_ISO></PO_UNIT_ISO>
              <!--Optional:-->
              <ORDERPR_UN_ISO></ORDERPR_UN_ISO>
              <!--Optional:-->
              <BASE_UOM_ISO></BASE_UOM_ISO>
              <!--Optional:-->
              <WEIGHTUNIT_ISO></WEIGHTUNIT_ISO>
              <!--Optional:-->
              <VOLUMEUNIT_ISO></VOLUMEUNIT_ISO>
              <!--Optional:-->
              <POINTS_UN_ISO></POINTS_UN_ISO>
              <!--Optional:-->
              <CONF_MATL_EXTERNAL></CONF_MATL_EXTERNAL>
              <!--Optional:-->
              <CONF_MATL_GUID></CONF_MATL_GUID>
              <!--Optional:-->
              <CONF_MATL_VERSION></CONF_MATL_VERSION>
              <!--Optional:-->
              <MATERIAL_EXTERNAL></MATERIAL_EXTERNAL>
              <!--Optional:-->
              <MATERIAL_GUID></MATERIAL_GUID>
              <!--Optional:-->
              <MATERIAL_VERSION></MATERIAL_VERSION>
              <!--Optional:-->
              <PUR_MAT_EXTERNAL></PUR_MAT_EXTERNAL>
              <!--Optional:-->
              <PUR_MAT_GUID></PUR_MAT_GUID>
              <!--Optional:-->
              <PUR_MAT_VERSION></PUR_MAT_VERSION>
              <!--Optional:-->
              <GRANT_NBR></GRANT_NBR>
              <!--Optional:-->
              <CMMT_ITEM_LONG></CMMT_ITEM_LONG>
              <!--Optional:-->
              <FUNC_AREA_LONG></FUNC_AREA_LONG>
              <!--Optional:-->
              <BUDGET_PERIOD></BUDGET_PERIOD>
              <!--Optional:-->
              <MATERIAL_LONG></MATERIAL_LONG>
              <!--Optional:-->
              <PUR_MAT_LONG></PUR_MAT_LONG>
              <!--Optional:-->
              <CONF_MATL_LONG></CONF_MATL_LONG>
           </item>
        </IT_PURCHASE_VALUES>
     </urn:ZFM_VEN_PURCHASE_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VEN_DS&receiverParty=&receiverService=&interface=SI_VEN_PURCHASE_DS&interfaceNamespace=http://vendor_portal_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwMzA3NDQFAAQAAAAICgAIUE9VU0VSQDH%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzAzMDc0NDQ5WjAjBgkqhkiG9w0BCQQxFgQUouF65b6ZXlDoMZy8XzPNIobRxNEwCQYHKoZIzjgEAwQwMC4CFQDvuW9uK9SfY87PwbzBCxLin%2FV%2FUQIVAKckNPCub0QlyFHOD9zFA6O4voLw; JSESSIONID=kMmADbY9WvvQQh2oLyv8X4_N7wTDgQF-Y2kA_SAPwrXCuYcQWfOa_3XDTQj4jalL; JSESSIONMARKID=ShCiLwIRY9EeGHqOUT6tjZbyYUT7KLEdVcTn5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});

// EMPLOYEEE PORTAL


app.post("/elogin", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_EMP_LOGIN_DS>
        <!--You may enter the following 3 items in any order-->
        <ID>`+uname+`</ID>
        <WF_PASSWRD>`+pwd+`</WF_PASSWRD>
        <!--Optional:-->
        <PROFILE_DET>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <COMP_CODE></COMP_CODE>
              <!--Optional:-->
              <COMP_NAME></COMP_NAME>
              <!--Optional:-->
              <CITY></CITY>
              <!--Optional:-->
              <COUNTRY></COUNTRY>
              <!--Optional:-->
              <CURRENCY></CURRENCY>
              <!--Optional:-->
              <LANGU></LANGU>
              <!--Optional:-->
              <CHRT_ACCTS></CHRT_ACCTS>
              <!--Optional:-->
              <FY_VARIANT></FY_VARIANT>
              <!--Optional:-->
              <VAT_REG_NO></VAT_REG_NO>
              <!--Optional:-->
              <COMPANY></COMPANY>
              <!--Optional:-->
              <ADDR_NO></ADDR_NO>
              <!--Optional:-->
              <COUNTRY_ISO></COUNTRY_ISO>
              <!--Optional:-->
              <CURRENCY_ISO></CURRENCY_ISO>
              <!--Optional:-->
              <LANGU_ISO></LANGU_ISO>
           </item>
        </PROFILE_DET>
     </urn:ZFM_EMP_LOGIN_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EMP_DS&receiverParty=&receiverService=&interface=SI_EMP_LOGIN_DS&interfaceNamespace=http://emp_port_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwNTE0MzcFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzA1MTQzNzAyWjAjBgkqhkiG9w0BCQQxFgQUMTe5dDnaV3TV!V4E65RbS4fR5kYwCQYHKoZIzjgEAwQvMC0CFQD6Dbyhgf!6fTsRQG5idy6av1KmKwIUHQViA9gXueaaOrLf3W2pXU6jd!s%3D; JSESSIONID=KUHTgb7PI3B7Cl06_KHTO1zdDMvOgQF-Y2kA_SAPO_Qli_ypv0qiQ7m0N8ZB44qD; JSESSIONMARKID=H1GfeAPllk5v91uFwDhr2FXqoRNbY0vdrSAX5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});


app.post("/eleave", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_EMP_LEAVE_DS>
        <!--You may enter the following 2 items in any order-->
        <EMPLOYEENO>`+uname+`</EMPLOYEENO>
        <!--Optional:-->
        <IT_LEAVE_DATA>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <EMPLOYEENO></EMPLOYEENO>
              <!--Optional:-->
              <SUBTYPE></SUBTYPE>
              <!--Optional:-->
              <OBJECTID></OBJECTID>
              <!--Optional:-->
              <LOCKINDIC></LOCKINDIC>
              <!--Optional:-->
              <VALIDEND></VALIDEND>
              <!--Optional:-->
              <VALIDBEGIN></VALIDBEGIN>
              <!--Optional:-->
              <RECORDNR></RECORDNR>
              <!--Optional:-->
              <START></START>
              <!--Optional:-->
              <END></END>
              <!--Optional:-->
              <ABSENCETYPE></ABSENCETYPE>
              <!--Optional:-->
              <NAMEOFABSENCETYPE></NAMEOFABSENCETYPE>
              <!--Optional:-->
              <ABSENCEDAYS></ABSENCEDAYS>
              <!--Optional:-->
              <ABSENCEHOURS></ABSENCEHOURS>
           </item>
        </IT_LEAVE_DATA>
     </urn:ZFM_EMP_LEAVE_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EMP_DS&receiverParty=&receiverService=&interface=SI_EMP_LEAVE_DS&interfaceNamespace=http://emp_port_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwNTE0MzcFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzA1MTQzNzAyWjAjBgkqhkiG9w0BCQQxFgQUMTe5dDnaV3TV!V4E65RbS4fR5kYwCQYHKoZIzjgEAwQvMC0CFQD6Dbyhgf!6fTsRQG5idy6av1KmKwIUHQViA9gXueaaOrLf3W2pXU6jd!s%3D; JSESSIONID=KUHTgb7PI3B7Cl06_KHTO1zdDMvOgQF-Y2kA_SAPO_Qli_ypv0qiQ7m0N8ZB44qD; JSESSIONMARKID=DigILwZNukCeLoot_fMzl1Epu3hVIzb_a5AX5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});


app.post("/epayslip", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_EMP_PAYSLIP_DS>
        <!--You may enter the following 2 items in any order-->
        <EMPLOYEENO>`+uname+`</EMPLOYEENO>
        <!--Optional:-->
        <IT_PAYSLIP>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <SEQUENCENUMBER></SEQUENCENUMBER>
              <!--Optional:-->
              <FPPERIOD></FPPERIOD>
              <!--Optional:-->
              <FPBEGIN></FPBEGIN>
              <!--Optional:-->
              <FPEND></FPEND>
              <!--Optional:-->
              <BONUSDATE></BONUSDATE>
              <!--Optional:-->
              <PAYDATE></PAYDATE>
              <!--Optional:-->
              <PAYTYPE></PAYTYPE>
              <!--Optional:-->
              <PAYID></PAYID>
              <!--Optional:-->
              <OCREASON></OCREASON>
              <!--Optional:-->
              <PAYTYPE_TEXT></PAYTYPE_TEXT>
              <!--Optional:-->
              <OCREASON_TEXT></OCREASON_TEXT>
           </item>
        </IT_PAYSLIP>
     </urn:ZFM_EMP_PAYSLIP_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EMP_DS&receiverParty=&receiverService=&interface=SI_EMP_PAYSLIP_DS&interfaceNamespace=http://emp_port_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwNTE0MzcFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzA1MTQzNzAyWjAjBgkqhkiG9w0BCQQxFgQUMTe5dDnaV3TV!V4E65RbS4fR5kYwCQYHKoZIzjgEAwQvMC0CFQD6Dbyhgf!6fTsRQG5idy6av1KmKwIUHQViA9gXueaaOrLf3W2pXU6jd!s%3D; JSESSIONID=KUHTgb7PI3B7Cl06_KHTO1zdDMvOgQF-Y2kA_SAPO_Qli_ypv0qiQ7m0N8ZB44qD; JSESSIONMARKID=H1GfeAPllk5v91uFwDhr2FXqoRNbY0vdrSAX5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});


app.post("/eprofile", function (req, res) {
  uname = req.body.uname;
  pwd = req.body.pwd;
  const postData =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:ZFM_EMP_PROF_DS>
        <!--You may enter the following 3 items in any order-->
        <EMPID>`+uname+`</EMPID>
        <COMPANY>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <COMP_CODE></COMP_CODE>
              <!--Optional:-->
              <COMP_NAME></COMP_NAME>
              <!--Optional:-->
              <CITY></CITY>
              <!--Optional:-->
              <COUNTRY></COUNTRY>
              <!--Optional:-->
              <CURRENCY></CURRENCY>
              <!--Optional:-->
              <LANGU></LANGU>
              <!--Optional:-->
              <CHRT_ACCTS></CHRT_ACCTS>
              <!--Optional:-->
              <FY_VARIANT></FY_VARIANT>
              <!--Optional:-->
              <VAT_REG_NO></VAT_REG_NO>
              <!--Optional:-->
              <COMPANY></COMPANY>
              <!--Optional:-->
              <ADDR_NO></ADDR_NO>
              <!--Optional:-->
              <COUNTRY_ISO></COUNTRY_ISO>
              <!--Optional:-->
              <CURRENCY_ISO></CURRENCY_ISO>
              <!--Optional:-->
              <LANGU_ISO></LANGU_ISO>
           </item>
        </COMPANY>
        <COMPANY_ADDRESS>
           <!--Zero or more repetitions:-->
           <item>
              <!--Optional:-->
              <ADDR_NO></ADDR_NO>
              <!--Optional:-->
              <FORMOFADDR></FORMOFADDR>
              <!--Optional:-->
              <NAME></NAME>
              <!--Optional:-->
              <NAME_2></NAME_2>
              <!--Optional:-->
              <NAME_3></NAME_3>
              <!--Optional:-->
              <NAME_4></NAME_4>
              <!--Optional:-->
              <C_O_NAME></C_O_NAME>
              <!--Optional:-->
              <CITY></CITY>
              <!--Optional:-->
              <DISTRICT></DISTRICT>
              <!--Optional:-->
              <CITY_NO></CITY_NO>
              <!--Optional:-->
              <POSTL_COD1></POSTL_COD1>
              <!--Optional:-->
              <POSTL_COD2></POSTL_COD2>
              <!--Optional:-->
              <POSTL_COD3></POSTL_COD3>
              <!--Optional:-->
              <PO_BOX></PO_BOX>
              <!--Optional:-->
              <PO_BOX_CIT></PO_BOX_CIT>
              <!--Optional:-->
              <DELIV_DIS></DELIV_DIS>
              <!--Optional:-->
              <STREET></STREET>
              <!--Optional:-->
              <STREET_NO></STREET_NO>
              <!--Optional:-->
              <STR_ABBR></STR_ABBR>
              <!--Optional:-->
              <HOUSE_NO></HOUSE_NO>
              <!--Optional:-->
              <STR_SUPPL1></STR_SUPPL1>
              <!--Optional:-->
              <STR_SUPPL2></STR_SUPPL2>
              <!--Optional:-->
              <LOCATION></LOCATION>
              <!--Optional:-->
              <BUILDING></BUILDING>
              <!--Optional:-->
              <FLOOR></FLOOR>
              <!--Optional:-->
              <ROOM_NO></ROOM_NO>
              <!--Optional:-->
              <COUNTRY></COUNTRY>
              <!--Optional:-->
              <LANGU></LANGU>
              <!--Optional:-->
              <REGION></REGION>
              <!--Optional:-->
              <SORT1></SORT1>
              <!--Optional:-->
              <SORT2></SORT2>
              <!--Optional:-->
              <TIME_ZONE></TIME_ZONE>
              <!--Optional:-->
              <TAXJURCODE></TAXJURCODE>
              <!--Optional:-->
              <ADR_NOTES></ADR_NOTES>
              <!--Optional:-->
              <COMM_TYPE></COMM_TYPE>
              <!--Optional:-->
              <TEL1_NUMBR></TEL1_NUMBR>
              <!--Optional:-->
              <TEL1_EXT></TEL1_EXT>
              <!--Optional:-->
              <FAX_NUMBER></FAX_NUMBER>
              <!--Optional:-->
              <FAX_EXTENS></FAX_EXTENS>
           </item>
        </COMPANY_ADDRESS>
     </urn:ZFM_EMP_PROF_DS>
  </soapenv:Body>
</soapenv:Envelope>`;
var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EMP_DS&receiverParty=&receiverService=&interface=SI_EMP_PROF_DS&interfaceNamespace=http://emp_port_ds.com',
  'headers': {
    'SOAPAction': 'http://sap.com/xi/WebService/soap1.1',
    'Content-Type': 'application/xml',
    'Authorization': 'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6UE9VU0VSQDGIAAdkZWZhdWx0AQAIUE9VU0VSQDECAAMwMDADAANLUE8EAAwyMDIyMDcwNTE0MzcFAAQAAAAICgAIUE9VU0VSQDH%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjIwNzA1MTQzNzAyWjAjBgkqhkiG9w0BCQQxFgQUMTe5dDnaV3TV!V4E65RbS4fR5kYwCQYHKoZIzjgEAwQvMC0CFQD6Dbyhgf!6fTsRQG5idy6av1KmKwIUHQViA9gXueaaOrLf3W2pXU6jd!s%3D; JSESSIONID=KUHTgb7PI3B7Cl06_KHTO1zdDMvOgQF-Y2kA_SAPO_Qli_ypv0qiQ7m0N8ZB44qD; JSESSIONMARKID=H1GfeAPllk5v91uFwDhr2FXqoRNbY0vdrSAX5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: postData

};
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
      result1 = JSON.parse(result1);
      res.send(result1);
      console.log(result1);
    }
  });
});




  app.listen(4000, () => {
    console.log("server has started");
  });