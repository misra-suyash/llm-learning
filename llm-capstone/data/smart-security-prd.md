---
source: Smart+Security+Tiers+&+Pricing+v2+PRD.doc
extracted: 2026-02-10T00:16:20.449Z
format: confluence-html-export
---

Smart Security Tiers & Pricing v2 PRD

# Smart Security Tiers & Pricing v2 PRD

<table><tbody><tr><td><p><strong>Product Manager</strong></p></td><td><p><a href="https://ecobee.atlassian.net/wiki/people/557058:c56b5398-2e22-49db-bfdd-11e3a72d95f4?ref=confluence">Lucien Benacem</a></p></td><td rowspan="8"></td></tr><tr><td><p><strong>Portfolio Manager</strong></p></td><td><p><a href="https://ecobee.atlassian.net/wiki/people/712020:0777cbd7-b5c1-4d79-9f43-6c1fc8903bf8?ref=confluence">Saumya Saxena</a></p></td></tr><tr><td><p><strong>Product Designer</strong></p></td><td><p><a href="https://ecobee.atlassian.net/wiki/people/5c6c21bf2a4c4463b68c3264?ref=confluence">Morgan Jones</a></p></td></tr><tr><td><p><strong>Product Marketing Manager</strong></p></td><td><p><a href="https://ecobee.atlassian.net/wiki/people/6372648e9e48f2b9a6100d30?ref=confluence">Malika Minotra</a></p></td></tr><tr><td><p><strong>Program Manager</strong></p></td><td><p><a href="https://ecobee.atlassian.net/wiki/people/712020:8285cd1d-bbfc-4987-846d-b77678483ed8?ref=confluence">Johvonna Murray-Bradshaw</a></p></td></tr><tr><td><p><strong>Technical Lead(s)</strong></p></td><td><p><a href="https://ecobee.atlassian.net/wiki/people/712020:345345c7-eda5-4425-ba97-ef682dd01f19?ref=confluence">David Arnold</a></p></td></tr><tr><td><p><strong>Slack Channel</strong></p></td><td><p><strong>#ess-tiers-v2-and-pro-monitoring-canada-core-team</strong></p><p><strong>#epic-ess-tiers-addons-v2-workstreams</strong></p></td></tr><tr><td><p><strong>Sponsors</strong></p></td><td><p><a href="https://ecobee.atlassian.net/wiki/people/712020:05465538-5628-4f14-bf48-7e449e488014?ref=confluence">Sudiksha Shrimali</a></p></td></tr></tbody></table>

# Key Decisions to be Made
* * *

1.  DECIDED[Sudiksha Shrimali](https://ecobee.atlassian.net/wiki/people/712020:05465538-5628-4f14-bf48-7e449e488014?ref=confluence) to confirm Finance alignment with selling Apple subscriptions to new Canadian customers, and that an internal transfer process from US bank account to CA bank account can be established for Launch

2.  DECIDED[Tom Vamos](https://ecobee.atlassian.net/wiki/people/62ecdd6ff15eecaf500eb8de?ref=confluence) If we are unable to complete the transition to the new Apple subscriber flows (Req. NS-4.0-6.0, we should implement Req. BB-7.3 as our fallback approach for iOS customers for launch. Decision to be made on 17 Sep 2025 . See #tmp-ess-tiers-v2-us-apple-chargebee-subs Slack channel for more details
-   Due to new launch date in Q1 2026, Apple subscriptions will be part of launch

3.  DECIDED [Lucien Benacem](https://ecobee.atlassian.net/wiki/people/557058:c56b5398-2e22-49db-bfdd-11e3a72d95f4?ref=confluence) determine if we still need transitionary Apple SKUs or if we can offer all subscribers transitioning from Chargebee â Apple a 1 month trial.
-   Yes, from a business funnel perspective we do still need the transitionary SKUs. Otherwise we would introduce too much variability in the overall funnel forecasting due to variances in trial lengths.


# Introduction
* * *

## Market Context and Objectives

[https://generac.sharepoint.com/:w:/t/ECO-HomeMonitoringProduct/EWky5Zo5E4lGtSTnktYlAQIBM84hw\_3IFtKoT44M\_zUb4g?e=6JpIxg](https://generac.sharepoint.com/:w:/t/ECO-HomeMonitoringProduct/EWky5Zo5E4lGtSTnktYlAQIBM84hw_3IFtKoT44M_zUb4g?e=6JpIxg) - ratified on 12 May 2025

Broader device/services strategy doc: [https://generac.sharepoint.com/:w:/t/ECO-HomeMonitoringProduct/EeRSkRhj0cFIleXnSxpxjy4BpZkr7G7lvAgtDrMvFctE7A?e=CVJfFc](https://generac.sharepoint.com/:w:/t/ECO-HomeMonitoringProduct/EeRSkRhj0cFIleXnSxpxjy4BpZkr7G7lvAgtDrMvFctE7A?e=CVJfFc)

# Product Requirements
* * *
**Note 1:** During the 06 Oct 2025 Tiers v2 GTM review, the DLT asked that we consolidate the features in the Core tier and sell only one such tier. We aligned on the updated plan on 31 Oct 2025 and the [decision doc can be found here](https://generac-my.sharepoint.com/:w:/r/personal/sudiksha_s_ecobee_com/Documents/Documents/04.%20Home%20Monitoring/03.%20Operations/09.%20Service%20Strategy/20251008%20Service%20Tiers%20Update.docx?d=w0d7f1f9e5a6b4111969a51066d93309c&csf=1&web=1&e=TnWwcd).

Key changes:

1.  Show Core (free) column in all tier comparison tables

2.  Combine Core for Camera and Core for Sensors entitlements into one Plus tier

3.  Hide Core for Sensors tier behind feature flag for experimentation

4.  Update the service SKUs with new tier names


Changes to the requirements to align with this new approach are flagged with an UPDATED status
**Note 2:** All subscription-related updates defined in this PRD are **incremental to** requirements defined in [Professional Monitoring (US/Canada) PRD](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5251301519/Professional+Monitoring+US+Canada+PRD)

Priority legend
-   P0 â Growing-to-Wow Barebones: MVP customer experience
-   P1 â Growing-to-Wow Competitive: Required experiences for customer launch
-   P2 â Growing-to-Wow Disruptor: Nice to have improvement for customer experience


## Building Blocks

### UPDATED New Tier/Add-on Structure

The future state envisions 3 accretive tiers:

1.  **Core (Free)** tier:
-   Benefits a customer gets out of the box with the purchase of their ecobee devices

2.  **~Core for Camera~ Plus** tier:
-   Targeted at: customers with 1 camera, any number of sensors and optional thermostat
-   Features include: camera awareness, access control, intrusion and life safety self-monitoring, enhanced energy savings and the option to add on Professional Monitoring

3.  **Advanced** tier:
-   Targeted at: customers with cameras (unlimited) + sensors (+ optional thermostat)
-   Features include: intrusion and life safety self-monitoring, camera awareness and access control, enhanced energy savings, and the option to add on Professional Monitoring
**Sensor-forward ~Core~Basic** experimental tier:
-   Targeted at: customers with a thermostat + sensors
-   Features include: intrusion and life safety self-monitoring, enhanced energy savings, and the option to add on Professional Monitoring
-   Treated as an experimental tier that is targeted at specific cohorts of ecobee base customers. Not visible on the website for everyone.


The table below illustrates the desired end state for the **Tiers v2** launch (âLaunch 1â):

The table below illustrates the desired end state for **Tiers v2 at Vesta** **launch** (âLaunch 2â):

|
**Category**

 |
**Req #**

 |
**Priority**

 |
**Use Case**

 |
**Mocks**

 |
**Notes**

 |
**JIRA Tickets**

 | | --- | --- | --- | --- | --- | --- | --- | |
**Entitlement to SKU mapping updates**

Owner: [David Arnold](https://ecobee.atlassian.net/wiki/people/712020:345345c7-eda5-4425-ba97-ef682dd01f19?ref=confluence)

 |

BB-1.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

HM Backend premium feature entitlements are updated to reflect the new mapping in [Tiers Restructuring Technical Design](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5496209415/Tiers+Restructuring+Technical+Design)

 | |
**Chargebee SKUs (US)**

Owner: [David Arnold](https://ecobee.atlassian.net/wiki/people/712020:345345c7-eda5-4425-ba97-ef682dd01f19?ref=confluence)

 |

BB-2.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

New SKUs are created for the **Basic tier**
-   Monthly SKU: $5/mo
-   Annual SKU: $50/yr


 | |

BB-2.1 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

New SKUs are created for the **Plus tier**
-   Monthly SKU: $5/mo
-   Annual SKU: $50/yr


 | |

BB-2.2 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

New SKUs are created for the **Advanced tier**
-   Monthly SKU: $10/mo
-   Annual SKU: $100/yr


 |

Stop granting the _proHomeMonitoring_ entitlement as part of this new tier after Launch date

 | |

BB-2.3 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

New **Professional Monitoring: Smoke Alarm Detection add-ons** are created:
-   Monthly SKU: $5/mo
-   Annual SKU: $50/yr
-   Can be added to Basic, Plus or Advanced tiers


 | |

BB-2.4 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

New **Professional Monitoring: Total Protection add-ons** are created:
-   Monthly SKU: $10/mo
-   Annual SKU: $100/yr
-   Can be added to Basic, Plus or Advanced tiers


 | |

BB-2.5 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P1

 |

New **24/7 Video Recording add-ons** are created:
-   Monthly SKU: $10/mo
-   Annual SKU: $100/yr
-   Can be added to Plus or Advanced tiers. Covers up to 10 cameras.


 | |
**Chargebee SKUs (CA)**

Owner: [David Arnold](https://ecobee.atlassian.net/wiki/people/712020:345345c7-eda5-4425-ba97-ef682dd01f19?ref=confluence)

 |

BB-3.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

New SKUs for **Basic tier** are created:
-   Monthly SKU: $7/mo
-   Annual SKU: $70/yr


 | |

BB-3.1 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

New SKUs for **Plus tier** are created:
-   Monthly SKU: $7/mo
-   Annual SKU: $70/yr


 | |

BB-3.2 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

New SKUs for **Advanced tier** are created:
-   Monthly SKU: $14/mo
-   Annual SKU: $140/yr


 |

Stop granting the _proHomeMonitoring_ entitlement as part of this tier after Launch date

 | |

BB-3.3 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

New **Professional Monitoring: Smoke Alarm Detection add-ons** are created:
-   Monthly SKU: $7/mo
-   Annual SKU: $70/yr
-   Can be added to Basic, Plus or Advanced tiers


 | |

BB-3.4 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

New **Professional Monitoring: Total Protection add-ons** are created:
-   Monthly SKU: $14/mo
-   Annual SKU: $140/yr
-   Can be added to Basic, Plus or Advanced tiers


 | |

BB-3.5 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P1

 |

New **24/7 Video Recording add-ons** are created:
-   Monthly SKU: $14/mo
-   Annual SKU: $140/yr
-   Can be added to Plus or Advanced tiers (covers up to 10 cameras)


 | |
**Transitionary (Chargebee â Apple) SKUs (US/CA)**

Owner: [David Arnold](https://ecobee.atlassian.net/wiki/people/712020:345345c7-eda5-4425-ba97-ef682dd01f19?ref=confluence)

 |

BB-4.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

New transitionary SKUs for customers converting from a Chargebee auto-trial to an Apple paid subscription are created:
-   **Basic monthly**
-   No trial
-   2 week trial
-   **Basic annual**
-   No trial
-   2 week trial
-   **Plus monthly**
-   No trial
-   2 week trial
-   **Plus annual**
-   No trial
-   2 week trial
-   **Advanced monthly**
-   No trial
-   2 week trial
-   **Advanced annual**
-   No trial
-   2 week trial


 | |
**Apple SKUs and Add-ons (US)**

Owner: [Tom Vamos](https://ecobee.atlassian.net/wiki/people/62ecdd6ff15eecaf500eb8de?ref=confluence)

 |

BB-5.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

Equivalent tier SKUs and add-ons to the âChargebee SKUs (US)â section (Req. BB-2.0-2.4) are created within the Apple ecosystem

 | |
**Apple SKUs and Add-ons (CA)**

Owner: [Tom Vamos](https://ecobee.atlassian.net/wiki/people/62ecdd6ff15eecaf500eb8de?ref=confluence)

 |

BB-5.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

Equivalent tier SKUs and add-ons to the âChargebee SKUs (CA)â section (Req. BB-3.0-3.4) are created within the Apple ecosystem

 |

Depends on Key Decision 1

 | |
**iOS app updates**

Owner: [Tom Vamos](https://ecobee.atlassian.net/wiki/people/62ecdd6ff15eecaf500eb8de?ref=confluence)

 |

_Existing iOS CA subscribers pre-Launch_

 | |

BB-6.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As an existing iOS CA subscriber pre-Launch, I should be taken to the Subscriptions Web App in a logged-in state in the internal app browser (and not the Apple subscriptions flow)

 |

For these customers, their subscription system is Chargebee. They have already converted to paid and we should allow them to continue managing their subscriptions via the Subscriptions Web App/Chargebee.

 | |

_Enabling the Advanced Commerce API_

 | |

BB-7.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

As an ecobee developer, I should upgrade the Apple subscription implementation on iOS to StoreKit 2 to enable the Commerce API and add-on functionality

 |

[Investigation on Subscription Add-ons within Apple Subscriptions](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5465211000/Investigation+on+Subscription+Add-ons+within+Apple+Subscriptions)

 | |

BB-7.1 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

[App Store Server Notifications V2](https://developer.apple.com/documentation/appstoreservernotifications/app-store-server-notifications-v2)

 | |

BB-7.2 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

Understand the requirements and user flows in the Apple ecosystem for transitioning customers from the old tiers to the new tiers

 |

[https://developer.apple.com/documentation/advancedcommerceapi/migrate-subscription-to-advanced-commerce-api](https://developer.apple.com/documentation/advancedcommerceapi/migrate-subscription-to-advanced-commerce-api)

 | |
**Incident escalations for Life Safety vs Professional Monitoring: Total Protection**

 |

BB-8.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

Incident escalations via RapidSOS can be independently triggered for Life Safety (Smoke alarm) and Intrusion incidents

 |

This is necessary in order to be able to sell Professional Monitoring: Smoke Alarm Detection and Professional Monitoring: Total Protection add-ons independently.

 | |

BB-9.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

As a customer with both the _proLifeSafetyMonitoring_ and _pro_I_ntrusionMonitoring_ entitlements (associated with the Professional Monitoring: Total Protection add-on), I should see no change to the current Professional Monitoring experience

 | |

BB-10.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As a customer with only the _proLifeSafetyMonitoring_ (no _proIntrusionMonitoring_) entitlement, the following experiences should reflect escalation to RapidSOS only for smoke alarm-triggered incidents and not intrusion-triggered ones:
-   Professional Monitoring onboarding flow
-   âPRO MONITORINGâ badge on the eSS card
-   eSS settings for Smoke Alarm Detection and Professional Monitoring
-   Activity Alert push notification
-   Activity Alert screen


 | |
**Refunding plans and add-ons**

 |

BB-11.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

As a Customer Support agent, I should be able to refund plans, add-ons, or both via the Chargebee Admin Portal

 |

In the case where only a plan or an add-on is refunded, a partial refund will need to be issued.

 | |

BB-12.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

As a Finance team member, I should be able to see a partial refund in NetSuite after one is issued

 |

## New Subscriber Experience

### Service-only Monthly/Annual Subscribers

|
**Category**

 |
**Req #**

 |
**Priority**

 |
**Use Case**

 |
**Mocks**

 |
**Notes**

 |
**JIRA Tickets**

 | | --- | --- | --- | --- | --- | --- | --- | |
**Auto-trial Start (ATS)**

Owner: [David Arnold](https://ecobee.atlassian.net/wiki/people/712020:345345c7-eda5-4425-ba97-ef682dd01f19?ref=confluence)

 |

NSO-1.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

As an Auto-trial Start home, I should be put into a trial on the **Advanced tier with the Professional Monitoring: Total Protection add-on.**

 | |
**Manual Trial Start (MTS)**

Owner: [David Arnold](https://ecobee.atlassian.net/wiki/people/712020:345345c7-eda5-4425-ba97-ef682dd01f19?ref=confluence)

 |

NSO-2.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

As an MTS user, I can manually start a subscription on any of the tiers or add-ons available for Smart Security

 | |
**Subscription Web App updates**

Owner: [David Arnold](https://ecobee.atlassian.net/wiki/people/712020:345345c7-eda5-4425-ba97-ef682dd01f19?ref=confluence)

 |

NSO-3.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

As subscriber, I can upgrade, cross-grade or downgrade between any of the tiers or add/remove add-ons available for Smart Security

 | |

NSO-4.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

As an eSS trialist, I should see a Recommended badge on the Plan Selection and Add-on screens that reflect the best fit options for my home

 |

See the Recommended Badge Logic section for more details

 | |
**10% off security devices and security device bundles on DotCom soft benefit**

NEW

 |

NSO-33.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

While I am an Advanced tier eSS paid subscriber, I should have access to a 10% off coupon which can be used on [ecobee.com](http://ecobee.com) to purchase additional security devices or security device bundles

Requirements: [https://ecobee.atlassian.net/wiki/x/SQCHTgE](https://ecobee.atlassian.net/wiki/x/SQCHTgE)

 | |
**Mobile app updates**

Owner: [Tom Vamos](https://ecobee.atlassian.net/wiki/people/62ecdd6ff15eecaf500eb8de?ref=confluence) [Ayana Moniz](https://ecobee.atlassian.net/wiki/people/60fedf8e3900e60070794d18?ref=confluence)

 |

_Apple subscriptions (US/CA) signup flow **(post-Advanced Commerce API implementation)**_

 | |

NSO-5.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As an iOS subscriber in the US or CA, I should see an updated Plan Selection screen that reflects the new tier and add-on options and pricing options

 |

Note: the Apple subscriptions path will only apply for new-post-Launch subscribers in Canada.

Depends on Key Decision 1

 | |

NSO-6.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As an iOS subscriber in the US/CA, I should see a new screen for add-on selection as part of the subscription signup flow

 | |

NSO-7.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As an iOS US/CA eSS trialist, I should see a Recommended badge on the Plan Selection and Add-on screens that reflect the best fit options for my home

 |

See the Recommended Badge Logic section for more details

 | |

NSO-8.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As an iOS eSS trialist or subscriber I should be able to manage my subscription through the ecobee app (see Appendix E)

 | |

_Android subscriptions signup flow_

 | |

NSO-9.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As an Android eSS trialist, I should be linked to the new Subscriptions Web App Plan Selection screen when signing up

 |

New URL will be created

 | |

_Contextual conversion moments for trialists_

 | |

NSO-10.0

 |

P0

 |

As an eSS trialist viewing the trial checklist, I should see not only the eSS features I can take advantage of but also those that are currently inaccessible to me due to not having supporting devices

 |

For example, a camera-only home should see the Life Safety and Camera Awareness features as available and checked/unchecked but also see that Energy Savings and Intrusion features are available by adding a Hecate sensor. Consider whether this checklist should be merged with the Smart Security Awareness screen

 | |

NSO-11.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As an eSS trialist at the time of <launch date>, I should see the new trial checklist on <launch date>

 | |

_Contextual tier upgrade moments for paid subscribers_

 | |
**Req ID**

 |
**Summary**

 |
**Platform(s)**

 |
**Owner**

 |
**Priority**

 | | --- | --- | --- | --- | --- | --- |


NSO-13.0

 |

As a paid eSS subscriber on the **Basic tier**, I should be prompted to upgrade to the **Advanced tier** when I register my first camera (Theia or Asteria) to the home.

[IOS-17297](https://ecobee.atlassian.net/browse/IOS-17297) - Getting issue details... STATUS

[AND-13234](https://ecobee.atlassian.net/browse/AND-13234) - Getting issue details... STATUS


 |

APP

 |

[Tom Jacobs](https://ecobee.atlassian.net/wiki/people/712020:f4319f18-9710-4b67-9877-cd59c2053ed3?ref=confluence)

 |

P0

 |


NSO-14.0

 |

As a paid eSS subscriber on the **Basic tier** with a registered camera, I should be prompted to upgrade to the **Advanced tier** when I tap the gold shield icon on camera-related features.

[IOS-17299](https://ecobee.atlassian.net/browse/IOS-17299) - Getting issue details... STATUS

[AND-13235](https://ecobee.atlassian.net/browse/AND-13235) - Getting issue details... STATUS


 |

APP

 |

[Tom Jacobs](https://ecobee.atlassian.net/wiki/people/712020:f4319f18-9710-4b67-9877-cd59c2053ed3?ref=confluence)

 |

P0

 |


NSO-15.0

 |

As a paid eSS subscriber on the **Basic tier**, I should be prompted to upgrade to the **Advanced tier** when I register an additional camera to the home.

[IOS-17298](https://ecobee.atlassian.net/browse/IOS-17298) - Getting issue details... STATUS

[AND-13236](https://ecobee.atlassian.net/browse/AND-13236) - Getting issue details... STATUS


 |

APP

 |

[Tom Jacobs](https://ecobee.atlassian.net/wiki/people/712020:f4319f18-9710-4b67-9877-cd59c2053ed3?ref=confluence)

 |

P0

 |


NSO-16.0

 |

As a paid eSS subscriber on the **Plus tier** with multiple cameras, I should be prompted to upgrade to the **Advanced tier** when I tap on the gold shield icon on camera-related features.

[IOS-17300](https://ecobee.atlassian.net/browse/IOS-17300) - Getting issue details... STATUS

[AND-13237](https://ecobee.atlassian.net/browse/AND-13237) - Getting issue details... STATUS


 |

APP

 |

[Tom Jacobs](https://ecobee.atlassian.net/wiki/people/712020:f4319f18-9710-4b67-9877-cd59c2053ed3?ref=confluence)

 |

P0

 |


NSO-17.0

 |

As a paid eSS subscriber on the **Plus tier**, I should be prompted to upgrade to the **Advanced tier** when I register my first Hecate sensor.

[IOS-17301](https://ecobee.atlassian.net/browse/IOS-17301) - Getting issue details... STATUS

[AND-13238](https://ecobee.atlassian.net/browse/AND-13238) - Getting issue details... STATUS


 |

APP

 |

[Tom Jacobs](https://ecobee.atlassian.net/wiki/people/712020:f4319f18-9710-4b67-9877-cd59c2053ed3?ref=confluence)

 |

P0

 |


NSO-18.0

 |

As a paid eSS subscriber on the **Core for Camera tier**, I should be prompted to upgrade to the **Advanced tier** when I tap the gold shield icon on an Energy-Savings-related feature or an Intrusion-related feature.

[IOS-17302](https://ecobee.atlassian.net/browse/IOS-17302) - Getting issue details... STATUS

[AND-13239](https://ecobee.atlassian.net/browse/AND-13239) - Getting issue details... STATUS


 |

APP

 |

[Tom Jacobs](https://ecobee.atlassian.net/wiki/people/712020:f4319f18-9710-4b67-9877-cd59c2053ed3?ref=confluence)

 |

P0

 | |
|

_Contextual add-on upgrade moments for paid subscribers_

 | |
**Req ID**

 |
**Summary**

 |
**Platform(s)**

 |
**Owner**

 |
**Priority**

 | | --- | --- | --- | --- | --- | --- |


NSO-19.0

 |

As a paid eSS subscriber on the **Basic tier** or **Advanced tier** without any PM add-on, I should be prompted to add the **Professional Monitoring: Total Protection add-on** when tapping the âSELF-MONITORINGâ badge on the arm controls card or the âProfessional Monitoringâ monitoring method in eSS settings
-   Move to menu or monitoring method menu item


 |

APP

 |

[Tom Jacobs](https://ecobee.atlassian.net/wiki/people/712020:f4319f18-9710-4b67-9877-cd59c2053ed3?ref=confluence)

 |

P1

 |


NSO-20.0

 |

As a paid eSS subscriber on the **Basic tier** without any PM add-on, I should be prompted to add the **Professional Monitoring: Total Protection add-on** via a new Discover card

 |

APP

 |

[Tom Jacobs](https://ecobee.atlassian.net/wiki/people/712020:f4319f18-9710-4b67-9877-cd59c2053ed3?ref=confluence)

 |

P1

 |


NSO-21.0

 |

As a paid eSS subscriber on the **Basic tier** or **Plus tier** or **Advanced tier** without any PM add-on, I should be prompted to add the **Professional Monitoring: Smoke Alarm Detection add-on** from the Smoke Alarm Alerts screen in eSS settings

 |

APP

 |

[Tom Jacobs](https://ecobee.atlassian.net/wiki/people/712020:f4319f18-9710-4b67-9877-cd59c2053ed3?ref=confluence)

 |

P1

 | |
|

_Contextual tier upgrade moments for non-subscribers_

 | |
**Req ID**

 |
**Summary**

 |
**Platform(s)**

 |
**Owner**

 |
**Priority**

 | | --- | --- | --- | --- | --- | --- |


N/A

 |

As a **non eSS subscriber** with Smart Security devices outside of trial, I should be prompted to upgrade to **generally explore ecobee Smart Security plans** when I tap the gold shield icon on camera, energy-savings, or intrusion related features.
-   No changes required to existing production drawers


 |

APP

 |

[Tom Jacobs](https://ecobee.atlassian.net/wiki/people/712020:f4319f18-9710-4b67-9877-cd59c2053ed3?ref=confluence)

 |

N/A

 |


N/A

 |

As a **user who recently completed an eSS trial** with Smart Security devices, I should be prompted to upgrade to **generally explore ecobee Smart Security plans** when my trial has expired.
-   No changes required to existing production drawers


 |

APP

 |

[Tom Jacobs](https://ecobee.atlassian.net/wiki/people/712020:f4319f18-9710-4b67-9877-cd59c2053ed3?ref=confluence)

 |

N/A

 | |
|

_Miscellaneous tier name copy updates_

 | |

NSO-22.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As an eSS trialist viewing the Professional Monitoring insurance certificate screen, the copy should be updated to reference that a Smart Security add-on is required instead of referencing the Complete tier

 |

[AND-13993](https://ecobee.atlassian.net/browse/AND-13993) - Getting issue details... STATUS

[IOS-18208](https://ecobee.atlassian.net/browse/IOS-18208) - Getting issue details... STATUS

 | |

NSO-23.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As an eSS trialist, the Professional Monitoring Discover card should be updated to reference that a Smart Security add-on is required instead of referencing the Complete tier

 |

[AND-13994](https://ecobee.atlassian.net/browse/AND-13994) - Getting issue details... STATUS

[IOS-18209](https://ecobee.atlassian.net/browse/IOS-18209) - Getting issue details... STATUS

 | |
**Subscriptions Web App**

UPDATED

 |

NSO-33.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

The Basic tier is hidden behind an Optimizely feature flag such that it can be used for experiments

 | |
**Chargebee email updates**

Owner: [Tom Jacobs](https://ecobee.atlassian.net/wiki/people/712020:f4319f18-9710-4b67-9877-cd59c2053ed3?ref=confluence) [Malika Minotra](https://ecobee.atlassian.net/wiki/people/6372648e9e48f2b9a6100d30?ref=confluence)

 |

NSO-24.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

All Chargebee emails with references to service value propositions are updated to reflect the new tier and add-on structure, pricing, and messaging hierarchy

 |

[HMB-2510](https://ecobee.atlassian.net/browse/HMB-2510) - Getting issue details... STATUS

 | |
**Legal T&Cs updates**

Owner: [Lucien Benacem](https://ecobee.atlassian.net/wiki/people/557058:c56b5398-2e22-49db-bfdd-11e3a72d95f4?ref=confluence)

 |

NSO-25.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

As an eSS customer, I should see the new tiers and pricing reflected in the Terms and Conditions I agree to for the service.

 | |
**AP2 updates**

Owner: [Jasper Ruban](https://ecobee.atlassian.net/wiki/people/712020:400e88bc-acae-47b6-a45b-e5bf7e8b08e0?ref=confluence)

 |

NSO-26.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

Update telemetry in AP2 to show Subscription details of v2 Pricing Tiers and new PM Add-Ons

 | |

NSO-27.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

The updated Home Features resulting from Req. BB-1.0 are surfaced on the Home Details screen in AP2

 | |

NSO-28.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

Display information on Chargebee coupons

 | |

NSO-29.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P1

 |

Add information unique to PM in Canada in AP2

 | |
**Finance / Business Systems testing**
Owner: [Villet Rahiman](https://ecobee.atlassian.net/wiki/people/5d7a7502003e040c3e17336d?ref=confluence) [Cameron Jones](https://ecobee.atlassian.net/wiki/people/6022ac916180010069a83e4a?ref=confluence) [Dami Otepola](https://ecobee.atlassian.net/wiki/people/6138c6ec14e8340071f1e889?ref=confluence)

 |

NSO-30.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

See [M1 Workstreams - Service Tiers Restructure Program](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5472551763/M1+Workstreams+-+Service+Tiers+Restructure+Program)

 | |
**Customer Support**

Owner: [Asif Islam](https://ecobee.atlassian.net/wiki/people/557058:3c5c1fcd-5947-409a-ac41-bb789f3e2185?ref=confluence)

 |

NSO-31.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

See [M1 Workstreams - Service Tiers Restructure Program](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5472551763/M1+Workstreams+-+Service+Tiers+Restructure+Program)

 | |
**Business Intelligence updates**

Owner: [Maryam Bamdad](https://ecobee.atlassian.net/wiki/people/712020:8ef714dc-b779-4eca-8d56-d72c387df3ad?ref=confluence) [Donna Blakeborough](https://ecobee.atlassian.net/wiki/people/5bb4cff8ab2e976d0b642a06?ref=confluence)

 |

NSO-32.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P1

 |

See [M1 Workstreams - Service Tiers Restructure Program](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5472551763/M1+Workstreams+-+Service+Tiers+Restructure+Program)

 |

### Hardware + Service Bundle Customers

Activation code statuses
-   **Active** - Generated but not used
-   **Redeemed** - Generated, added to the subscription, tier was changed but revenue recognition has not occurred yet
-   **Applied** - Generated, plan has changed, and revenue recognized


|
**Category**

 |
**Req #**

 |
**Priority**

 |
**Use Case**

 |
**Mocks**

 |
**Notes**

 |
**JIRA Tickets**

 | | --- | --- | --- | --- | --- | --- | --- | |
**Hardware + Service Bundles 1.0 (via DotCom)**

Owner: [David Arnold](https://ecobee.atlassian.net/wiki/people/712020:345345c7-eda5-4425-ba97-ef682dd01f19?ref=confluence)

 |

_Building blocks_

 | |

NHSB-1.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

Update **HSB**, **TSS**, & **T-MOBILE TUESDAYS ECOBEE DOORBELL OFFER** coupons in Chargebee to:
-   Include both old Complete tier and new Advanced tier
-   Include appropriate PM add-on that is covered by the activation code


 |

[https://generac.sharepoint.com/:x:/t/ECO-HomeMonitoringProduct/IQB41JzKpY3ESbsxWsz2ZzQnAVdhTI2jQBi9XgaePawSm4c?e=ouQccW](https://generac.sharepoint.com/:x:/t/ECO-HomeMonitoringProduct/IQB41JzKpY3ESbsxWsz2ZzQnAVdhTI2jQBi9XgaePawSm4c?e=ouQccW)

 | |

NHSB-2.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

Update Asteria + Service bundle coupons in Chargebee to include both old Standard and new Plus tier

 | |

_New v1.0 Bundle customers_

 | |

NHSB-3.0

 |

P0

 |

As a new v1.0 Bundle customer on or after <launch day>, I should receive an activation code via email that reflects the new tiers/add-ons

 | |
**Hardware + Service Bundles 1.5 (via Builder channel)**

Owner: [David Arnold](https://ecobee.atlassian.net/wiki/people/712020:345345c7-eda5-4425-ba97-ef682dd01f19?ref=confluence)

 |

_Building blocks_

 | |

NHSB-4.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

Update existing coupons to include new tiers so that we can change customers' subscriptions to the new tiers

 |

See above audit spreadsheet

 | |

NHSB-5.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

Create new equivalent programs to those that exist today that use the Plus tier

 |

Can we update an existing program with the new tier in the database? Canât rollback easily if we need to

 | |

_New v1.5 Bundle customers_

 | |

NHSB-6.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

For new Asteria serial numbers that are uploaded: 
-   Activation codes will be generated using the new program and thus new Plus tier
-   When a user registers their device, it will follow the new program


 | |
**Supply Ops SKU setup**

Owner: [Josh Huizenga](https://ecobee.atlassian.net/wiki/people/5cdc4e264eeaaa0dd0b04594?ref=confluence)

 |

NHSB-7.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

See [M1 Workstreams - Service Tiers Restructure Program](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5472551763/M1+Workstreams+-+Service+Tiers+Restructure+Program)

 |

### Sales & Marketing Updates

|
**Category**

 |
**Req #**

 |
**Priority**

 |
**Use Case**

 |
**Mocks**

 |
**Notes**

 |
**JIRA Tickets**

 | | --- | --- | --- | --- | --- | --- | --- | |
**DotCom updates**

Owner: [Rose Kwan](https://ecobee.atlassian.net/wiki/people/5fa985beecdae6006851808a?ref=confluence)

 |

SM-1.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

SKU creation & mapping with new eSS & bundle SKUs in Shopify & Contentful (US/CA)
-   Standard SKU â Plus SKU
-   Complete SKU â Advanced SKU (no monitoring)


 |

N/A

 | |

SM-2.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

eSS landing page:
-   Redesign to highlight new tier structure for US/CA
-   Communicate add-on structure of Professional Monitoring for US only


 | |

SM-3.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

PDPs (Product Detail Pages) updates:
-   Highlight new tier structure & Professional Monitoring (US only) as a key feature including refresh all eSS comparison charts, content updates, features & specs, footnotes, eSS components etc.
-   Smart Sensor D&W
-   Smart Doorbell Camera
-   TSS, HSB, Smart Doorbell with eSS bundles


 | |

SM-4.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

CDPs (Category pages) updates:
-   Highlight new tier structure & Professional Monitoring (US only) as a key feature including refresh all eSS comparison charts, content updates, features & specs, footnotes, eSS components etc.
-   T-stat, t-stat accessories sensor & bundle category page


 | |

SM-5.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

Cart logic updates to relink new SKUs for cart recommendations

 | |
**Retail PDP updates**

Owner: [Ranujan Sivakumar](https://ecobee.atlassian.net/wiki/people/616d728eb9c549006f548658?ref=confluence)

 |

SM-6.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |
-   Refresh of all eSS material with creative team
-   AMZ US & CA brandstore eSS page update
-   Update PDPs across all HM products (Doorbell, Sensors, club SKUs, & online bundles) for all retailers
-   Audit of all retail PDP pages with eSS mention
-   Bullet Points
-   Image Carousel
-   BTF Rich Content
-   Update to marketing/tradeshow collateral
-   Brochure
-   Retail Sales Pitch Deck & Retail Presentation


 | |
**Base Comms updates**

Owner: [Eddie Hanson](https://ecobee.atlassian.net/wiki/people/5e6a8ea6308ac10ced3a4e2f?ref=confluence) [Joseph Martin](https://ecobee.atlassian.net/wiki/people/640f1b2e6b29c052ab2bcb55?ref=confluence)

 |

SM-7.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

See [M1 Workstreams - Service Tiers Restructure Program](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5472551763/M1+Workstreams+-+Service+Tiers+Restructure+Program)

 | |
**Paid Media**

Owner: [Eddie Hanson](https://ecobee.atlassian.net/wiki/people/5e6a8ea6308ac10ced3a4e2f?ref=confluence) [Naghmeh Rezvanpour](https://ecobee.atlassian.net/wiki/people/6148ce59fac3ce0069ce9eb4?ref=confluence) [June Chen](https://ecobee.atlassian.net/wiki/people/712020:a6580594-5dd7-47b6-92ee-85d308b1122f?ref=confluence)

 |

SM-8.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

See [M1 Workstreams - Service Tiers Restructure Program](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5472551763/M1+Workstreams+-+Service+Tiers+Restructure+Program)

 | |
**PR/Social**

Owner: [Samantha Evans](https://ecobee.atlassian.net/wiki/people/712020:3b412ec3-b5bb-4678-b43f-16f0a83124b6?ref=confluence)

 |

SM-9.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

See [M1 Workstreams - Service Tiers Restructure Program](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5472551763/M1+Workstreams+-+Service+Tiers+Restructure+Program)

 |

## Existing Subscriber Experience
**Timeline view for existing subscribers:**

[https://generac.sharepoint.com/:p:/t/ECO-HomeMonitoringProduct/EXYJsazDv-NDgqzKuSOzJYAB6-\_i4iLd7U4qWRqi713Awg?e=nl0zjL](https://generac.sharepoint.com/:p:/t/ECO-HomeMonitoringProduct/EXYJsazDv-NDgqzKuSOzJYAB6-_i4iLd7U4qWRqi713Awg?e=nl0zjL)

As of 06 Jan 2026 :
-   <launch date> = 16 Mar 2026
-   <grandfathering start date> = 16 Mar 2026
-   <grandfathering end date> = 15 May 2026


### UPDATED Tier/Add-on Transition Map

In transitioning existing Smart Security subscribers from the old tiers to the new tiers/addons, we will optimize for preserving used features across the transition. The table below segments different cohorts by used feature sets.

[https://generac.sharepoint.com/:x:/t/ECO-HomeMonitoringProduct/EeHRHs5xMldKoWr1-hchCLIB-k3GJXD5iY5EI\_4tu2tHZA?e=FhQqbw](https://generac.sharepoint.com/:x:/t/ECO-HomeMonitoringProduct/EeHRHs5xMldKoWr1-hchCLIB-k3GJXD5iY5EI_4tu2tHZA?e=FhQqbw)

The following comms strategy will be executed: [eSS Tiers Restructure GTM Review & Communications Strategy](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5685903361/eSS+Tiers+Restructure+GTM+Review+Communications+Strategy)

### Service-only Monthly/Annual Subscribers

|
**Category**

 |
**Req #**

 |
**Priority**

 |
**Use Case**

 |
**Mocks**

 |
**Notes**

 |
**JIRA Tickets**

 | | --- | --- | --- | --- | --- | --- | --- | |

Announcement of upcoming pricing changes

Owner: [Malika Minotra](https://ecobee.atlassian.net/wiki/people/6372648e9e48f2b9a6100d30?ref=confluence)

 |

ESO-1.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As an existing subscriber, I should be notified of the new tier and pricing changes via email on <launch date>

 | |

Grandfathering in of current subscribers

 |

ESO-2.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As a subscriber that was grandfathered, I should be transitioned to a tier/add-on combination that preserves my current functionality on <launch date> (based on Tier/Add-on Transition Map below)

 | |

ESO-3.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

\[Assumes price increase strategy\]

As ecobee, we will offer existing subscribers a pricing-grandfathering period of **60 days** post the <launch date>, i.e. my pricing should not increase before <grandfathering end date>

 |

Our existing Terms & Conditions require that we provide 60 days advance notice for pricing changes:

_Changes to Fees. ecobee may increase Service Fees by providing written notice to You at least 60 days prior to the end of the then-current Service Period._ 
* * *

Our Terms & Conditions will be updated on Launch day to change this notice period to 30 days for future updates.

 | |

ESO-4.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

\[Assumes price increase strategy\]

As an existing monthly subscriber on <launch date>, any monthly renewals within the grandfathering period will occur on the **new** tiers and **old** pricing

 |

Existing monthly subscribers will have 2 monthly renewals on their old pricing

 | |

ESO-5.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

\[Assumes price increase strategy\]

As an existing annual subscriber on <launch date>, any annual renewals that occur _within_ the grandfathering period will occur on the **new** tiers and **old** pricing

 |

Existing annual subscribers will have 1 annual renewal on their old pricing

 | |

ESO-6.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

\[Assumes price increase strategy\]

As an existing subscriber on <launch date>, any renewals that occur _after_ the grandfathering period will occur on the **new** pricing

 | |

New subscribers

 |

ESO-7.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As a new subscriber on or after <launch date>, my subscription will be on one of the new tiers/add-ons

 | |

End of grandfathering period - service-only subscriptions

 |

ESO-8.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

\[Assumes price increase strategy\]

As a subscriber subject to the grandfathering period, I should be notified of the upcoming pricing changes happening on my next renewal ahead of <grandfathering end date>

 |

[Malika Minotra](https://ecobee.atlassian.net/wiki/people/6372648e9e48f2b9a6100d30?ref=confluence) decide if this email is part of our GTM approach

 | |

ESO-9.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As a previous subscriber that has a cancelled subscription, I should be transitioned to a tier/add-on combination that preserves my current functionality on <launch date>

 | |

End of grandfathering period - subscriptions with coupons

 |

ESO-10.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As ecobee, I should ensure that any Chargebee customers that have a special coupon already applied are transitioned gracefully on <launch date>. For example, perpetually-free employee subscriptions should have an equivalent coupon code (applying to new tiers) applied to them.

 |

Add new tiers to existing coupons
-   US
-   ecobee Contractor Advisory Group
-   Marketing - 1 Year Free (Influencers) Shopify Bundles
-   Landsea Asteria US Model Homes - Perpetually Free
-   Highland Homes Smart from the Start ecobee Promo
-   CA
-   Enercare Comfort Plus Package Aug 2024
-   ecobee Contractor Advisory Group


QA coupons
-   Time to clean these up and retire them
-   We donât use them for anything anymore, we can always create new ones if we need it.


 |

### Hardware + Service Bundle Customers

Activation code statuses
-   **Active** - Generated but not used
-   **Redeemed** - Generated, added to the subscription, plan was changed but revenue recognition has not occurred yet
-   **Applied** - Generated, tier has changed, and revenue recognized


|
**Category**

 |
**Req #**

 |
**Priority**

 |
**Use Case**

 |
**Mocks**

 |
**Notes**

 |
**JIRA Tickets**

 | | --- | --- | --- | --- | --- | --- | --- | |
**Hardware + Service Bundles 1.0 (via DotCom)**

Owner: [David Arnold](https://ecobee.atlassian.net/wiki/people/712020:345345c7-eda5-4425-ba97-ef682dd01f19?ref=confluence)

 |

_Existing v1.0 Bundle customers_

 | |

NHSB-1.0

 |

P0

 |

As a bundle customer with an activation code that had not yet been redeemed on <launch day>, I have one year to redeem it

 |

Validity period for activation codes is one year

 | |

NHSB-3.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P1

 |

\[Assumes price increase strategy\]

As a bundle customer that has redeemed an activation code, I should be notified of the upcoming pricing changes happening on my next renewal ahead of <1 year post-launch date>

 |

[Malika Minotra](https://ecobee.atlassian.net/wiki/people/6372648e9e48f2b9a6100d30?ref=confluence) decide if this email is part of our GTM approach

 | |

NHSB-4.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As a bundle customer that has redeemed an activation code, I should be transitioned to a tier/add-on combination that preserves my current functionality on <launch date> (based on Tier/Add-on Transition Map) but will not be billed for the new tier/add-on combination until my next renewal date

 | |

NHSB-5.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As a previous subscriber that has a cancelled subscription, I should be transitioned to a tier/add-on combination that preserves my current functionality on <launch date> but not be billed for the new tier/add-on combination until I reactivate my subscription.

 | |
**Hardware + Service Bundles 1.5 (via Builder channel)**

Owner: [David Arnold](https://ecobee.atlassian.net/wiki/people/712020:345345c7-eda5-4425-ba97-ef682dd01f19?ref=confluence)

 |

_Existing v1.5 Bundle customers - Bulk tier/add-on changes_

 | |

NHSB-6.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

For activation codes that have already been generated on <launch day> and have not been attached to a subscription yet (activation code status = ACTIVE), when a customer registers their Asteria, it should create a subscription that uses the Plus tier instead of the Standard tier

 |

Do we need to update the program mapping?

 | |

NHSB-7.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

For activation codes that have already been applied on <launch day> (activation code status = APPLIED), update their subscription to the new equivalent tier on Tiers v2

 |

### NEW Tiers v1 to Tiers v2 Transition/Grandfathering Process on Launch Day

#### **Chargebee Subscribers**

We will migrate Chargebee subscribers from v1 plans to v2 plans + addons via Chargebee bulk operations on <launch day>.

There are two cohorts to handle separately:

1.  **Standard -> Plus:** These customers (cohorts S1-S6) only experience a name change and have no pricing or entitlement changes as a result.

2.  **Complete -> (Plus or Advanced) + Professional Monitoring: Total Protection add-on**

1.  Monthly term - These customers will remain at $10 for the grandfathering period before moving to $15 (C1 and C3) or $20 (C2 and C4). This will be done by applying a coupon that discounts the difference in price for the renewals in the grandfathering period.

2.  Annual - Transitions will happen with _proration disabled_ to avoid a charge on launch day (since the annual tiers change price). The customer's next renewal will be at the old price if it happens within the grandfathering period (done via coupon that discounts the difference in price). If it renews outside of the grandfathering period after launch, these customers will pay the new price on renewal (no coupon will be applied).


Both groups would have their plans change _immediately_ on launch day. Going into the Subscriptions Web App would only show the new plans/add-ons from that point onward.

#### **Apple Subscribers**

Apple Guidelines

Appleâs guidelines for handling a price change can be found here: [https://developer.apple.com/documentation/advancedcommerceapi/handling-subscription-price-changes](https://developer.apple.com/documentation/advancedcommerceapi/handling-subscription-price-changes). We will migrate Apple subscribers from v1 plans to v2 plans on <launch day>.

According to Appleâs rules:

There are three cohorts to handle separately:

1.  **Standard â Plus:** These will be migrated on the backend.

2.  **Complete customers with a full price increase (<= 50%):** For these customers, Apple does not require consent to be obtained. Customers will be migrated on the backend and see a popup sheet in the app notifying them of the upcoming pricing change and when it takes effect.

3.  **Complete customers with a partial price increase (capped at 50%):** These will also be migrated on the backend, but their price increase will be capped at 50% of the original price.


Consent Not Needed Path

|
**Category**

 |
**Req #**

 |
**Priority**

 |
**Use Case**

 |
**Mocks**

 |
**Notes**

 |
**JIRA Tickets**

 | | --- | --- | --- | --- | --- | --- | --- | |

Announcement of upcoming pricing changes

 |

ASN-1.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As an existing Apple subscriber, I should be notified of the upcoming tier and pricing changes by ecobee 60 days before <grandfathering end date> via email

 |

Requirement in our Smart Security Terms & Conditions

Tapping on the [http://branch.io](http://branch.io) linked CTA in the email opens the ecobee app

 | |

ASN-2.0

 |

P0

 |

As an existing Apple subscriber seeing a price increase, I should be notified of the upcoming tier and pricing changes via an in-app popup sheet 60 days before <grandfathering end date>

 |

Primary CTA: âAgree to New Priceâ and backend triggers price change

Secondary CTA: âManage Subscriptionâ

Tertiary CTA: âNot Nowâ

 |

App Store Communications Sent:
-   **Email:** For all subscription durations, the App Store sends an email 27 days before the renewal date. Note that for weekly subscriptions, the App Store calls the `Change Subscription Price` endpoint on the fourth consecutive renewal to increase the price.
-   **Price increase sheet:** The App Store displays a price increase sheet at the first app launch after the subscriber has entered the notice period.
-   **Push notification:** The App Store displays a push notification seven days before the renewal date if the subscriber hasnât viewed the price increase sheet in-app.


See here for more details: [https://developer.apple.com/documentation/advancedcommerceapi/handling-subscription-price-changes#Follow-the-consent-not-needed-path](https://developer.apple.com/documentation/advancedcommerceapi/handling-subscription-price-changes#Follow-the-consent-not-needed-path)

Consent Needed Path

Apple Subscription Price Increase Consent Requirements - Not Applicable

|
**Category**

 |
**Req #**

 |
**Priority**

 |
**Use Case**

 |
**Mocks**

 |
**Notes**

 |
**JIRA Tickets**

 | | --- | --- | --- | --- | --- | --- | --- | |

Announcement of upcoming pricing changes and request for consent

 |

ASC-1.0

 |

P0

 |

As an existing Apple subscriber seeing a price increase > 50% of the original price, I should be notified of the upcoming tier and pricing changes 60 days before <grandfathering end date> via push notification

 |

Tapping on the push leads to the popup sheet in ASC-3.0

 | |

ASC-2.0

 |

P0

 |

As an existing Apple subscriber seeing a price increase > 50% of the original price, I should be notified of the upcoming tier and pricing changes 60 days before <grandfathering end date> via email

 |

Tapping on the [http://branch.io](http://branch.io) linked CTA in the email (âReview changesâ) leads to the popup sheet in ASC-3.0

 | |

ASC-3.0

 |

P0

 |

As an existing Apple subscriber seeing a price increase > 50% of the original price, I should be notified of the upcoming tier and pricing changes and my need to consent to the price increase via an in-app popup sheet 60 days before <grandfathering end date>

 |

Primary CTA: âAgree to New Priceâ and backend triggers price change

Secondary CTA: âManage Subscriptionâ

Tertiary CTA: âNot Nowâ

 | |

ASC-4.0

 |

P0

 |

As an existing Apple subscriber seeing a price increase > 50% of the original price, if I tap âRemind me laterâ on the popup in ASC-2.0, I should see it again on app launch every week up <grandfathering end date>

 | |

ASC-5.0

 |

P0

 |

As an existing Apple subscriber seeing a price increase > 50% of the original price, if I have not provided consent to the price increase by <grandfathering end date>, my subscription is cancelled.

 |

### NEW Free 1 Month Professional Monitoring Trial

At Tiers v2 launch, we would like to offer US and Canadian subscribers a free 1 month trial of Professional Monitoring as part of our Go-to-Market strategy.
**Note about billing cycles:** the renewal date for an add-on must always match the base plan it is added to.

Example 1: Monthly subscriber
-   Paid monthly plan that renews on first of each month (e.g. 01-Jan)
-   1-month Professional Monitoring: Smoke Alarm Detection add-on trial started on 15-Jan
-   Add-on goes to active/paid state unless the customer removes it before 16-Jan. Customer does not do this.
-   For period 16-Jan to 31-Jan, customer is charged a prorated fee of (50% \* $5/mo) = $2.50 for the remaining add-on time until their next billing date
-   From 01-Feb to 28-Feb, customer is billed for base plan monthly cost + $5 for the add-on monthly cost


Example 2: Annual subscriber
-   Paid annual plan that renews on first of each year (e.g. 01-Jan)
-   1-month Professional Monitoring: Smoke Alarm Detection add-on trial started on 15-Jan
-   Add-on goes to active/paid state unless the customer removes it before 16-Jan. Customer does not do this.
-   For period 16-Jan to 31-Dec, customer is charged a prorated fee of (96% \* $50/mo) = $48 for the remaining add-on time until their next billing date (first of the following year)
-   From the next 01-Jan to 31-Dec, customer is billed for base plan annual cost + $50 for the add-on annual cost


|
**Category**

 |
**Req #**

 |
**Priority**

 |
**Use Case**

 |
**Mocks**

 |
**Notes**

 |
**JIRA Tickets**

 | | --- | --- | --- | --- | --- | --- | --- | |

Professional Monitoring Add-on Trial

 |

PMT-1.0 ![(question)](6b3fc94c19c825f675009c915d6f369fa8de98c44350f8d5b54e40506e912d0c)

 |

P0

 |

As an existing subscriber that does not have a Professional Monitoring add-on, I can opt-in to a free trial of either PM add-on manually

 | |

PMT-2.0

 |

P0

 |

As a customer registering my first device and starting an auto-trial, I should get a 1 month trial of the Professional Monitoring: Total Protection add-on

 | |

PMT-3.0

 |

P0

 |

As a customer with a cancelled subscription that adds a new security device to my home and triggers a re-trial, I should also get a 1 month trial of the Professional Monitoring: Total Protection add-on

 |

Chargebeeâs recommended implementation approach:

### Tier/Add-on Recommended Badge Logic

Smart Security Eligibility:
-   Eligible homes:
-   1+ camera (Asteria or Theia)
-   and 0+ other devices
-   Thermostat and 1+ Hecate
-   and 0+ other devices
-   Thermostat and 2+ Rhodos/RS1 sensors
-   Ineligible homes:
-   Thermostat-only
-   No other devices
-   Thermostat and 1 Rhodos/RS1 sensor
-   No other devices


The table below assumes that the home is eligible for Smart Security. For all options below, **Annual tiers** should be selected by default vs monthly.
**Note 1:** a camera must have a seat (enabled 30-day event video storage and detections) in order to be eligible to add the 24/7 Video Recording add-on for it. For example, on Plus it wouldnât be possible to have one camera with a seat and to buy 24/7 Video Recording for another camera without a seat. This is not an issue on the Advanced tier since all cameras have a seat.
**Note 2:** The logic shown in the table below is applied independently to the recommended tier and recommended add-on. For example:
-   Home has both Hecates (any #) and 2+ cameras
-   Home device configuration is checked and recommendation is the Advanced tier.
-   Customer wants to save money and chooses the Plus tier
-   Home device configuration is checked and recommendation is âProfessional Monitoring: Total Protectionâ add-on


<table><tbody><tr><td colspan="4"><p><strong>Home Configuration</strong></p></td><td rowspan="2"><p><strong>Recommendation</strong></p></td><td rowspan="2"><p><strong>Rationale</strong></p></td></tr><tr><td><p><strong>Hecates</strong></p></td><td><p><strong>Cameras (Asteria/Theia)</strong></p></td><td><p><strong>Thermostat</strong></p></td><td><p><strong>Rhodos</strong></p></td></tr><tr><td><p><img src="b67c9debb544323b2ba882e0ef6b30b26a5fafae547a22b01b1ebda2692d7f5d" width="16" height="16" alt="(error)"></p></td><td><p><img src="b67c9debb544323b2ba882e0ef6b30b26a5fafae547a22b01b1ebda2692d7f5d" width="16" height="16" alt="(error)"></p></td><td><p><img src="d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326" width="16" height="16" alt="(tick)"> (1+)</p></td><td><p><img src="d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326" width="16" height="16" alt="(tick)"> (2+)</p></td><td><ul><li><p><strong>Basic tier (<span>if in experiment, else Plus</span>)</strong></p></li><li><p><strong>Professional Monitoring: Smoke Alarm Detection add-on</strong> if thermostat is voice-enabled (Ares, Vulcan, Apollo)</p></li></ul></td><td><p>Home is not well-setup for intrusion-related PM</p></td></tr><tr><td><p><img src="d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326" width="16" height="16" alt="(tick)"> (1+)</p></td><td><p><img src="b67c9debb544323b2ba882e0ef6b30b26a5fafae547a22b01b1ebda2692d7f5d" width="16" height="16" alt="(error)"></p></td><td><p>0+</p></td><td><p>0+</p></td><td><ul><li><p><strong>Basic tier <span>(if in experiment, else Plus)</span></strong></p></li><li><p><strong>Professional Monitoring: Total Protection add-on</strong></p></li></ul></td><td><p>Home is well-setup for intrusion related PM and Professional Monitoring: Smoke Alarm Detection if thermostat is voice-enabled (Ares, Vulcan, Apollo)</p></td></tr><tr><td><p><img src="b67c9debb544323b2ba882e0ef6b30b26a5fafae547a22b01b1ebda2692d7f5d" width="16" height="16" alt="(error)"></p></td><td><p><img src="d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326" width="16" height="16" alt="(tick)"> (exactly 1)</p></td><td><p>0+</p></td><td><p>0+</p></td><td><ul><li><p><strong>Plus tier</strong></p></li><li><p><strong>Professional Monitoring: Smoke Alarm Detection add-on </strong>if camera is a Theia</p></li><li><p><strong>24/7 Video Recording for up to 10 cams</strong></p></li></ul></td><td><p>Only indoor cameras can do Smoke alarm, CO alarm listening</p></td></tr><tr><td><p><img src="b67c9debb544323b2ba882e0ef6b30b26a5fafae547a22b01b1ebda2692d7f5d" width="16" height="16" alt="(error)"></p></td><td><p><img src="d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326" width="16" height="16" alt="(tick)"> (2+)</p></td><td><p>0+</p></td><td><p>0+</p></td><td><ul><li><p><strong>Advanced tier</strong></p></li><li><p><strong>Professional Monitoring: Smoke Alarm Detection add-on </strong>if at least one camera is a Theia</p></li><li><p><strong>24/7 Video Recording for up to 10 cams</strong></p></li></ul></td><td><p>Home is not well-setup for intrusion-related PM</p><p>Only indoor cameras can do Smoke alarm, CO alarm listening</p></td></tr><tr><td><p><img src="d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326" width="16" height="16" alt="(tick)"> (1+)</p></td><td><p><img src="d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326" width="16" height="16" alt="(tick)"> (2+)</p></td><td><p>0+</p></td><td><p>0+</p></td><td><ul><li><p><strong>Advanced tier</strong></p></li><li><p><strong>Professional Monitoring: Total Protection add-on</strong></p></li><li><p><strong>24/7 Video Recording for up to 10 cams</strong></p></li></ul></td><td><p>Optimal setup for Smart Security</p></td></tr></tbody></table>

### Updates to Smoke Alarm Detection Incident Generation and Escalation

Today, our Smoke Alarm Detection feature requires the Smart Security home to be armed in order to generate an incident upon detecting a smoke alarmâs audio pattern. Logically, this does not make sense since a smoke alarm can be triggered by fire/smoke originating within the home at _any_ time, and arming should have no bearing on the continuous monitoring this feature provides. As implemented, at best it is not very useful to customers and at worst it is potentially a liability to ecobee if a customerâs house burns down while they were paying for Professional Monitoring: Smoke Alarm Detection. The P0 requirements below are important for launching the Professional Monitoring: Smoke Alarm Detection and Total Protection add-ons.
-   Timing diagram (slide 3): [https://generac.sharepoint.com/:p:/t/ECO-HomeMonitoringProduct/EelgmKsDn-dPhMA0r7E\_Ld0B0L3oppQbZG8\_rrYmnU7-lg?e=Mi8YGk](https://generac.sharepoint.com/:p:/t/ECO-HomeMonitoringProduct/EelgmKsDn-dPhMA0r7E_Ld0B0L3oppQbZG8_rrYmnU7-lg?e=Mi8YGk)
-   Spike: [HMB-2654](https://ecobee.atlassian.net/browse/HMB-2654) - Getting issue details... STATUS
-   Investigation: [ADR: Life Safety discovery](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5661000054/ADR+Life+Safety+discovery)


|
**Category**

 |
**Req #**

 |
**Priority**

 |
**Use Case**

 |
**Mocks**

 |
**Notes**

 |
**JIRA Tickets**

 | | --- | --- | --- | --- | --- | --- | --- | |
**Smoke Alarm Detection Incident Generation (with or without Professional Monitoring add-on)**

 |

As a customer with Smoke Alarm Detection enabledâ¦

 | |

SMO-1.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

The voice-enabled devices in my home should be always listening for the sound of a smoke alarm (T3) in any arm state (no dependency)

 |

Existing functionality

 |

[HMB-2710](https://ecobee.atlassian.net/browse/HMB-2710) - Getting issue details... STATUS

 | |

SMO-2.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

Once a smoke alarm audio pattern is detected, an incident should be immediately generated

 |

This includes:
-   Incident push notification to all members
-   Red incident screen in the app
-   ~Pulsating red pattern on thermostat screen~
-   No Activity Report (black screen with entry delay countdown timer)


 |

[HMB-2711](https://ecobee.atlassian.net/browse/HMB-2711) - Getting issue details... STATUS

[HMB-2712](https://ecobee.atlassian.net/browse/HMB-2712) - Getting issue details... STATUS

[HMB-2713](https://ecobee.atlassian.net/browse/HMB-2713) - Getting issue details... STATUS

 | |

SMO-2.1

 |

P0

 |

The copy on the incident push notification does not make reference to the home being armed.

 |

[AND-13653](https://ecobee.atlassian.net/browse/AND-13653) - Getting issue details... STATUS

[IOS-17828](https://ecobee.atlassian.net/browse/IOS-17828) - Getting issue details... STATUS

[HMB-2715](https://ecobee.atlassian.net/browse/HMB-2715) - Getting issue details... STATUS

 | |

~SMO-3.0~

 |

P0

 |

~When a smoke alarm incident is generated, voice-enabled devices should not play a siren~

 |

~Siren is meant as a deterrence feature for intrusions only~

 |

[HMB-2711](https://ecobee.atlassian.net/browse/HMB-2711) - Getting issue details... STATUS

~Confirmed this does not happen~

 | |

SMO-4.0

 |

P1

 |

When the smoke alarm audio pattern stops, the incident generated should be automatically closed

 |

Blocked by FW

 | |

SMO-5.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

As a member of the home, I should only see the following CTA buttons on the Activity Alert (incident) screen within the app:
-   Help (with PM enabled)
-   Dismiss
-   Dismiss
-   Dismiss and provide feedback


 |

No Manual siren or âDismiss and Disarmâ option

 |

[HMB-2714](https://ecobee.atlassian.net/browse/HMB-2714) - Getting issue details... STATUS

[AND-13664](https://ecobee.atlassian.net/browse/AND-13664) - Getting issue details... STATUS

[IOS-17829](https://ecobee.atlassian.net/browse/IOS-17829) - Getting issue details... STATUS

 | |
**Smoke Alarm Detection Incident Escalation to Emergency Services**

 |

As a customer with Smoke Alarm Detection enabled, either the Professional Monitoring: Smoke Alarm Detection or Professional Monitoring: Total Protection add-ons on my subscription, and Professional Monitoring setupâ¦

 | |

SMO-6.0

 |

P0

 |

When an incident is generated, the auto-escalation sequence to RapidSOS should begin if the Activity Alert (incident) has not been viewed within the app within 60 seconds or it has not been dismissed manually or automatically (Req. SMO-4.0)

 |

[HMB-2716](https://ecobee.atlassian.net/browse/HMB-2716) - Getting issue details... STATUS

[HMB-2717](https://ecobee.atlassian.net/browse/HMB-2717) - Getting issue details... STATUS

 | |

SMO-7.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

In the incident feed, an audio clip of the smoke alarm is included so members can verify the threat

 |

Existing functionality

 |

[HMB-2712](https://ecobee.atlassian.net/browse/HMB-2712) - Getting issue details... STATUS

 | |

SMO-7.1

 |

P1

 |

If customers have opted to share smoke alarm audio clips (any mic-enabled ecobee device in the home), the audio clip is included in the payload to RapidSOS

 |

Dependency on Req. PM-2.0

 |

Include _all devices that can detect smoke alarms_ as opted-in by default (opposite pattern to video clip sharing). Customer can opt-out devices if needed.

 | |

SMO-7.2

 |

P0

 |

If customers have opted to share video from indoor cameras (Theia or Vesta in indoor mode), the video clips from these cameras are included in the incident feed and payload to RapidSOS

 |

Existing functionality

 |

[HMB-2712](https://ecobee.atlassian.net/browse/HMB-2712) - Getting issue details... STATUS

 | |

SMO-8.0

 |

P1

 |

A shorter RapidSOS escalation sequence takes place for smoke/CO alarm-triggered incidents.

 |
-   Burglary escalations - no change
-   Life safety (Smoke/CO alarm) escalations - these need to be treated with more urgency and reliability when de-escalating.


See Appendix E for competitor comparison.

 | |
**Professional Monitoring Onboarding**

 |

PM-1.0

 |

P0

 |

As a Smart Security customer, my onboarding flow should reflect the Professional Monitoring add-on I have purchased

 |

Professional Monitoring: Total Protection add-on: existing flow

Professional Monitoring: Smoke Alarm Detection add-on:
-   Emphasis on life safety
-   Remove intrusion-related content


 | |

PM-2.0

 |

P1

 |

As a Smart Security customer, my onboarding flow should allow me to opt-in to sharing smoke alarm audio clips with RapidSOS during an incident

 | |
**Camera-only homes**

 |

SMO-9.0 ![(tick)](d1cea6be088b3e8653e6ccb2883bbd197350cfea6994bcd93ff73cbed3afa326)

 |

P0

 |

As a Smart Security customer with cameras only in my home, I should see an indicator that Smoke Alarm Detection is on or off

 |

[AND-13650](https://ecobee.atlassian.net/browse/AND-13650) - Getting issue details... STATUS

[IOS-17817](https://ecobee.atlassian.net/browse/IOS-17817) - Getting issue details... STATUS

 |

# Measuring Success

## Launch Success Metrics

Refer to: [M1 Approved Plan - Service Tiers Restructure Program](https://ecobee.atlassian.net/wiki/spaces/IRIS/pages/5484773377/M1+Approved+Plan+-+Service+Tiers+Restructure+Program#Measuring-Success)

# Appendices

## UPDATED Appendix A: New Service-only Tier/Add-on SKUs

The no-trial service SKU variants are meant to cover these cases:
-   The service component of Hardware + Service Bundles, which are sold without a trial
-   Standalone eSS service sold via DotCom or Amazon channels, which donât include a trial
-   Quebec SKU variants, where we don't offer a trial


For add-ons, âDynamicâ means that the trial length matches the parent plan they attached to.
**Provider**

 |
**Tier**

 |
**Billing Frequency**

 |
**Trial**

 |
**SKU**

 | | --- | --- | --- | --- | --- | --- | | 1 |

Apple (US)

 |

Basic tier (experimental)

 |

Monthly

 |

1 month

 |

apple.smartsecurity.basic.monthly.plan.1monthtrial.usd

 | | 2 |

2 weeks

 |

apple.smartsecurity.basic.monthly.plan.2weektrial.usd

 | | 3 |

None

 |

apple.smartsecurity.basic.monthly.plan.notrial.usd

 | | 4 |

Annual

 |

1 month

 |

apple.smartsecurity.basic.annual.plan.1monthtrial.usd

 | | 5 |

2 weeks

 |

apple.smartsecurity.basic.annual.plan.2weektrial.usd

 | | 6 |

None

 |

apple.smartsecurity.basic.annual.plan.notrial.usd

 | | 7 |

Plus tier

 |

Monthly

 |

1 month

 |

apple.smartsecurity.plus.monthly.plan.1monthtrial.usd

 | | 8 |

2 weeks

 |

apple.smartsecurity.plus.monthly.plan.2weektrial.usd

 | | 9 |

None

 |

apple.smartsecurity.plus.monthly.plan.notrial.usd

 | | 10 |

Annual

 |

1 month

 |

apple.smartsecurity.plus.annual.plan.1monthtrial.usd

 | | 11 |

2 weeks

 |

apple.smartsecurity.plus.annual.plan.2weektrial.usd

 | | 12 |

None

 |

apple.smartsecurity.plus.annual.plan.notrial.usd

 | | 13 |

Advanced tier

 |

Monthly

 |

1 month

 |

apple.smartsecurity.advanced.monthly.plan.1monthtrial.usd

 | | 14 |

2 weeks

 |

apple.smartsecurity.advanced.monthly.plan.2weektrial.usd

 | | 15 |

None

 |

apple.smartsecurity.advanced.monthly.plan.notrial.usd

 | | 16 |

Annual

 |

1 month

 |

apple.smartsecurity.advanced.annual.plan.1monthtrial.usd

 | | 17 |

2 weeks

 |

apple.smartsecurity.advanced.annual.plan.2weektrial.usd

 | | 18 |

None

 |

apple.smartsecurity.advanced.annual.plan.notrial.usd

 | | 19 |

Professional Monitoring: Smoke Alarm Detection add-on

 |

Monthly

 |

Dynamic

 |

apple.smartsecurity.promonitoringsmokecoalarmdetection.monthly.dynamictrial.addon.usd

 | | 20 |

Annual

 |

Dynamic

 |

apple.smartsecurity.promonitoringsmokecoalarmdetection.annual.dynamictrial.addon.usd

 | | 21 |

Professional Monitoring: Total Protection add-on

 |

Monthly

 |

Dynamic

 |

apple.smartsecurity.promonitoringtotalprotection.monthly.addon.dynamictrial.usd

 | | 22 |

Annual

 |

Dynamic

 |

apple.smartsecurity.promonitoringtotalprotection.annual.addon.dynamictrial.usd

 | | 23 |

24/7 Video Recording add-on

 |

Monthly

 |

Dynamic

 |

apple.smartsecurity.247videorecording.monthly.addon.dynamictrial.usd

 | | 24 |

Annual

 |

Dynamic

 |

apple.smartsecurity.247videorecording.annual.addon.dynamictrial.usd

 | | 25 |

Migration Plans NEW

 |

Plus & Professional Monitoring: Total Protection

 |

Monthly

 |

None

 |

apple.smartsecurity.plus.promonitoringtotalprotection.monthly.plan.notrial.usd

 | | 26 |

Annual

 |

None

 |

apple.smartsecurity.plus.promonitoringtotalprotection.annual.plan.notrial.usd

 | | 27 |

Advanced & Professional Monitoring: Total Protection

 |

Monthly

 |

None

 |

apple.smartsecurity.advanced.promonitoringtotalprotection.monthly.plan.notrial.usd

 | | 28 |

Annual

 |

None

 |

apple.smartsecurity.advanced.promonitoringtotalprotection.annual.plan.notrial.usd

 | | 29 |

Chargebee (US)

 |

Basic tier (experimental)

 |

Monthly

 |

1 month

 |

chargebee.smartsecurity.basic.monthly.1monthtrial.usd

 | | 30 |

None NEW

 |

chargebee.smartsecurity.basic.monthly.notrial.usd

 | | 31 |

Annual

 |

1 month

 |

chargebee.smartsecurity.basic.annual.1monthtrial.usd

 | | 32 |

None

 |

chargebee.smartsecurity.basic.annual.notrial.usd

 | | 33 |

Plus tier

 |

Monthly

 |

1 month

 |

chargebee.smartsecurity.plus.monthly.1monthtrial.usd

 | | 34 |

None NEW

 |

chargebee.smartsecurity.plus.monthly.notrial.usd

 | | 35 |

Annual

 |

1 month

 |

chargebee.smartsecurity.plus.annual.1monthtrial.usd

 | | 36 |

None

 |

chargebee.smartsecurity.plus.annual.notrial.usd

 | | 37 |

Advanced tier

 |

Monthly

 |

1 month

 |

chargebee.smartsecurity.advanced.monthly.1monthtrial.usd

 | | 38 |

None NEW

 |

chargebee.smartsecurity.advanced.monthly.notrial.usd

 | | 39 |

Annual

 |

1 month

 |

chargebee.smartsecurity.advanced.annual.1monthtrial.usd

 | | 40 |

None

 |

chargebee.smartsecurity.advanced.annual.notrial.usd

 | | 41 |

Professional Monitoring: Smoke Alarm Detection add-on

 |

Monthly

 |

Dynamic

 |

chargebee.smartsecurity.promonitoringsmokecoalarmdetection.monthly.addon.dynamictrial.usd

 | | 42 |

Annual

 |

Dynamic

 |

chargebee.smartsecurity.promonitoringsmokecoalarmdetection.annual.addon.dynamictrial.usd

 | | 43 |

Professional Monitoring: Total Protection add-on

 |

Monthly

 |

Dynamic

 |

chargebee.smartsecurity.promonitoringtotalprotection.monthly.addon.dynamictrial.usd

 | | 44 |

Annual

 |

Dynamic

 |

chargebee.smartsecurity.promonitoringtotalprotection.annual.addon.dynamictrial.usd

 | | 45 |

24/7 Video Recording add-on

 |

Monthly

 |

Dynamic

 |

chargebee.smartsecurity.247videorecording.monthly.addon.dynamictrial.usd

 | | 46 |

Annual

 |

Dynamic

 |

chargebee.smartsecurity.247videorecording.annual.addon.dynamictrial.usd

 | | 47 |

Chargebee (CA)

 |

Basic tier (experimental)

 |

Monthly

 |

1 month

 |

chargebee.smartsecurity.basic.monthly.1monthtrial.cad

 | | 48 |

None

 |

chargebee.smartsecurity.basic.monthly.notrial.cad

 | | 49 |

Annual

 |

1 month

 |

chargebee.smartsecurity.basic.annual.1monthtrial.cad

 | | 50 |

None

 |

chargebee.smartsecurity.basic.annual.notrial.cad

 | | 51 |

Plus tier

 |

Monthly

 |

1 month

 |

chargebee.smartsecurity.plus.monthly.1monthtrial.cad

 | | 52 |

None

 |

chargebee.smartsecurity.plus.monthly.notrial.cad

 | | 53 |

Annual

 |

1 month

 |

chargebee.smartsecurity.plus.annual.1monthtrial.cad

 | | 54 |

None

 |

chargebee.smartsecurity.plus.annual.notrial.cad

 | | 55 |

Advanced tier

 |

Monthly

 |

1 month

 |

chargebee.smartsecurity.advanced.monthly.1monthtrial.cad

 | | 56 |

None

 |

chargebee.smartsecurity.advanced.monthly.notrial.cad

 | | 57 |

Annual

 |

1 month

 |

chargebee.smartsecurity.advanced.annual.1monthtrial.cad

 | | 58 |

None

 |

chargebee.smartsecurity.advanced.annual.notrial.cad

 | | 59 |

Professional Monitoring: Smoke Alarm Detection add-on

 |

Monthly

 |

Dynamic

 |

chargebee.smartsecurity.promonitoringsmokecoalarmdetection.monthly.addon.dynamictrial.cad

 | | 60 |

Annual

 |

Dynamic

 |

chargebee.smartsecurity.promonitoringsmokecoalarmdetection.annual.addon.dynamictrial.cad

 | | 61 |

Professional Monitoring: Total Protection add-on

 |

Monthly

 |

Dynamic

 |

chargebee.smartsecurity.promonitoringtotalprotection.monthly.addon.dynamictrial.cad

 | | 62 |

Annual

 |

Dynamic

 |

chargebee.smartsecurity.promonitoringtotalprotection.annual.addon.dynamictrial.cad

 | | 63 |

24/7 Video Recording add-on

 |

Monthly

 |

Dynamic

 |

chargebee.smartsecurity.247videorecording.monthly.addon.dynamictrial.cad

 | | 64 |

Annual

 |

Dynamic

 |

chargebee.smartsecurity.247videorecording.annual.addon.dynamictrial.cad

 | | 65 |

Chargebee (CA-QC)

 |

Basic tier (experimental)

 |

Monthly

 |

None

 |

See row 44

 | | 66 |

Annual

 |

None

 |

See row 46

 | | 67 |

Plus tier

 |

Monthly

 |

None

 |

See row 48

 | | 68 |

Annual

 |

None

 |

See row 50

 | | 69 |

Advanced tier

 |

Monthly

 |

None

 |

See row 52

 | | 70 |

Annual

 |

None

 |

See row 54

 | | 71 |

Professional Monitoring: Smoke Alarm Detection add-on

 |

Monthly

 |

None

 |

See row 55

 | | 72 |

Annual

 |

None

 |

See row 56

 | | 73 |

Professional Monitoring: Total Protection add-on

 |

Monthly

 |

None

 |

See row 57

 | | 74 |

Annual

 |

None

 |

See row 58

 | | 75 |

24/7 Video Recording add-on

 |

Monthly

 |

None

 |

See row 59

 | | 76 |

Annual

 |

None

 |

See row 60

 |

## UPDATED Appendix B: New Hardware + Service Bundle SKUs

### DotCom
**Bundle Name**

 |
**Old Bundle SKU**

 |
**New Bundle SKU**

 |
**Price**

 |
**Old Tier**

 |
**New Tier / Addons**

 |
**Service Component SKU(s)**

 | | --- | --- | --- | --- | --- | --- | --- | --- | | 1 |

Asteria + 1 Year eSS (US)

 |

BD-CAM-1SESS

 |

BD-CAM-1SESS-02

 |

$164.99 USD

 |

Standard

 |

Plus tier

 |

EB-CAMSDB-01

chargebee.smartsecurity.plus.annual.1monthtrial.usd\_coupon

 | | 2 |

Asteria + 1 Year eSS (CA)

 |

BD-CAM-1SESSC

 |

BD-CAM-1SESSC-02

 |

$227.99 CAD

 |

Standard

 |

Plus tier

 |

EB-CAMSDB-01

chargebee.smartsecurity.plus.annual.1monthtrial.cad\_coupon

 | | 3 |

Total Security & Savings Bundle (US)

 |

BD-ARHCASSC-01

 |

BD-ARHCASSC-02

 |

$449.99 USD

 |

Complete

 |
-   Advanced tier
-   Professional Monitoring: Total Protection addon


 |

EB-STATE6-01

EB-DWSHM2PK-01

EB-CAMSDB-01

chargebee.smartsecurity.advanced.annual.1monthtrial.usd\_coupon

chargebee.smartsecurity.promonitoringtotalprotection.annual.addon.dynamictrial.usd\_coupon

 | | 4 |

Total Security & Savings Bundle (CA)

 |

BD-ARHCASSCC-01

 |

BD-ARHCASSCC-02

 |

$614.99 CAD

 |

Complete

 |
-   Advanced tier
-   Professional Monitoring: Total Protection addon


 |

EB-STATE6C-01

EB-DWSHM2PK-01

EB-CAMSDB-01

chargebee.smartsecurity.advanced.annual.1monthtrial.cad\_coupon

chargebee.smartsecurity.promonitoringtotalprotection.annual.addon.dynamictrial.cad\_coupon

 | | 5 |

Home Security Bundle (US)

 |

BD-ASHCTHSC-01

 |

BD-ASHCTHSC-02

 |

$334.99 USD

 |

Complete

 |
-   Advanced tier
-   Professional Monitoring: Total Protection addon


 |

EB-CAMSDB-01

EB-DWSHM2PK-01

EBSCV01

chargebee.smartsecurity.advanced.annual.1monthtrial.usd\_coupon

chargebee.smartsecurity.promonitoringtotalprotection.annual.addon.dynamictrial.usd\_coupon

 | | 6 |

Home Security Bundle (CA)

 |

BD-ASHCTHSCC-01

 |

BD-ASHCTHSCC-02

 |

$458.99 CAD

 |

Complete

 |
-   Advanced tier
-   Professional Monitoring: Total Protection addon


 |

EB-CAMSDB-01

EB-DWSHM2PK-01

EBSCV01

chargebee.smartsecurity.advanced.annual.1monthtrial.cad\_coupon

chargebee.smartsecurity.promonitoringtotalprotection.annual.addon.dynamictrial.cad\_coupon

 |

### Builder
**Bundle Name**

 |
**Old Bundle SKU**

 |
**New Bundle SKU**

 |
**Price**

 |
**Old Tier**

 |
**New Tier / Addons**

 |
**Service Component SKU(s)**

 | | --- | --- | --- | --- | --- | --- | --- | --- | | 1 |

Asteria + 2 Years eSS (US)

 |

EB-CAMSDB-01

 |

POST-TIERSV2 LAUNCH

[Alignment discussion](https://ecobeeteam.slack.com/archives/C0ABFF42SLW/p1769704007880639)

BD-CAM-2SESS-02

 |

Varies

 |

Standard

 |

Plus tier

 |

chargebee.smartsecurity.plus.annual.1monthtrial.usd

 |

## Appendix C: How Have Others Done It?

<table><tbody><tr><td><span><img width="468" loading="lazy" src="1c65d7a8e3dc016b5f950b563a97834d660ed38d411608adc57a37910448a306" height="790"></span></td><td><span><img width="433" loading="lazy" src="bf0c9aa3f2009803ab0eef01c03ab9ec9cb81faf10360d17a2e7397533e77bb0" height="591"></span><p></p></td><td><span><img width="468" loading="lazy" src="21685f404712e7f3c356047ea71f376d75bf44204364f1e7fea92a25a7beef09" height="823"></span></td><td><p></p></td></tr><tr><td><p>Ring tier/pricing change announcement email (02-Oct-2024)</p></td><td><p>SimpliSafe pricing change announcement email (29-Aug-2024)</p></td><td><p>goodprotein end of grandfathering period email (20-May-2025)</p></td><td><p></p></td></tr></tbody></table>

## Appendix D: Add-on UX - How have Others Done It?
**Arlo Secure**

<table><tbody><tr><td><span><img width="468" loading="lazy" src="0fff6b40fdc7dfe289a768f7a3e342a4acf55745414e7e1d39d4d4726c55ad77" height="352"></span></td><td><span><img width="468" loading="lazy" src="c6ab5e93352644bbe62f30febdb2515b14d6a93e5a9fd644b8c9a7ac07093069" height="353"></span></td><td><span><img alt="2.JPG" width="463" loading="lazy" src="9da50cf700b68cb2267aa2b270ffb14a9999127b494f396a56a0673371173154" height="438"></span></td></tr><tr><td><p>Current plan screen</p></td><td><p>Plan selection screen</p></td><td><p>Continuous Video Recording (CVR) per-camera addon screen</p></td></tr></tbody></table>

## Appendix E: Apple Subscriptions In-App Management Experience

|
**New signup (never subscribed)**

 |
**Add-on purchase**

 | |
**Downgrade - removal of add-on**

 |

Note: the sheet does **not** show the add-on that was removed, only the subscription items that are left in their current subscription (in this case, the Basic plan). This is the overall approach from Apple on these purchase sheets - they only show what the **next** state of the subscription will look like once the user accepts the purchase terms.

 |
**Crossgrade from monthly to annual billing term**

 | |
**Crossgrade from annual to monthly billing term**

 | |
**Grandfathering from Tiers v1 to Tiers v2 SKUs**

 |

Very important to know that this is done on our backend, so there's no UX for this. The user will just suddenly land in a new SKU out of nowhere, but Apple ensures that even though they are migrated, the price and billing cycle remains the same.

Since there's no UX, there's no in-app confirmation sheet, but the user will see the new SKU in their iOS settings page (see right)

 |
**What happens if the price that we need to charge them for the new SKU is more then what they were paying?**

Depending on these [set of rules here](https://developer.apple.com/documentation/advancedcommerceapi/handling-subscription-price-changes) we might need to ask for permission inside the app from the user to do this. If this is the case we have to handle 2 new consequences:

1.  We need to store somewhere in our backend the proof that the user did gave us their permission

2.  We need to know what to do in case the user refuses to give us permission


Assume the worst scenario that the user refuses to accept the price increase. This is what we can do in Advanced Commerce API: we can inform them in the app, right at the refusal time, that their subscription will be [cancelled](https://developer.apple.com/documentation/advancedcommerceapi/cancel-a-subscription). This will basically keep them on till the end of their billing cycle but will remove their renewal capabilities.

Later on, if the user decides to resubscribe, they can create a brand new subscription (this time on the new SKU with the new price) and Apple will accept it as a brand new subscription. The purchase flow will look like a regular new purchase and their iOS settings page will show the current valid subscription alongside with their old inactive subscription (see right)

 |