DIVYA FURNITURE WORLD
Furniture Rental Application — Complete End-to-End Functional Documentation
Document Type: Business Requirements Document (BRD) and Functional Requirements Specification (FRS)
Business Model: Hybrid Furniture Sales and Rental Marketplace
Application: Furniture Rental Website and Customer Experience
Frontend: Next.js, React, JavaScript, CSS
Business Scope: Furniture rentals operated by Divya Furniture World and approved third-party rental providers
Primary Users: Customers, Rental Providers, Operations Teams, Administrators
Document Status: Proposed functional specification for implementation

1. PROJECT OVERVIEW
1.1 Project Objective
The objective is to build a complete furniture rental application that enables customers to discover, compare, book, pay for, receive, use, extend, and return furniture through Divya Furniture World's website.
The platform will support two types of rental providers:
Divya Furniture World: Offers its own furniture for rent.
Partner Rental Providers: Approved furniture shops and rental businesses that list their furniture for rent through the marketplace.
Customers should be able to access rental furniture from participating providers through one unified website.
The application must manage the complete rental lifecycle, from product discovery to final return and deposit settlement.
1.2 Core Business Model
The rental application will support:
Furniture rental by day, week, or month, according to provider policies.
Rental availability by city and PIN code.
Multiple rental providers.
Rental product listings and pricing.
Rental date and duration selection.
Online rental booking.
Security deposits, where applicable.
Delivery and installation, where available.
Rental extensions.
Cancellation and refunds.
Furniture collection and returns.
Damage assessment and deposit deductions, where applicable.
Provider earnings and platform commissions.
Customer rental history.
1.3 Application Goals
The application should:
Make furniture rental easy for customers.
Allow customers to find furniture available in their location.
Display transparent rental prices and conditions.
Prevent overlapping reservations for the same inventory.
Support rentals from multiple approved providers.
Maintain accurate booking and payment statuses.
Track delivery, collection, and return operations.
Manage refundable deposits according to the rental agreement.
Support extensions and early returns where permitted.
Provide reliable reporting and audit trails.

2. APPLICATION MODULES
The complete rental system consists of the following modules.
Module
Purpose
Rental Homepage
Introduce rental services and featured products
Location Selection
Determine the customer's service area
Rental Categories
Organize furniture available for rent
Rental Search
Help customers find suitable furniture
Rental Product Listings
Display available rental furniture
Rental Product Details
Present product specifications and rental conditions
Availability Calendar
Check available inventory and rental dates
Rental Price Calculator
Calculate rental charges and applicable fees
Rental Cart
Review selected rental items
Rental Checkout
Collect booking, address, and payment information
Payment Management
Process rental payments and deposits
Rental Booking Management
Create and track rental bookings
Delivery Management
Schedule furniture delivery and installation
Rental Extensions
Manage additional rental periods
Return Management
Schedule and track furniture collection
Deposit Settlement
Calculate and process eligible deposit refunds
Customer Rental Account
Display bookings and rental history
Rental Notifications
Send booking and lifecycle updates
Customer Support
Handle rental issues and complaints
Vendor Rental Management
Allow approved providers to manage rental inventory
Admin Rental Management
Manage the overall rental operation
Rental Reports
Monitor bookings, revenue, inventory, and performance

This document defines the end-to-end rental functionality. Detailed vendor and administrator interfaces should be specified separately.

3. USER ROLES
3.1 Guest Customer
A guest can:
Browse rental categories.
Search rental products.
View product specifications.
View rental prices.
Select a location.
Check general serviceability.
View rental terms.
Begin a booking.
Register or sign in.
Guest checkout may be supported if enabled by the business.
3.2 Registered Customer
A registered customer can:
Book rental furniture.
Save delivery addresses.
View rental bookings.
Track delivery.
Request eligible extensions.
Request eligible cancellations.
Request return or collection.
View payment information.
View deposit status.
Raise support requests.
View completed rental history.
3.3 Rental Provider
An approved provider can manage its own rental listings and operational activities through the provider dashboard.
Potential permissions:
Create rental listings.
Manage rental pricing.
Manage inventory.
Configure rental service areas.
Set availability rules.
Review incoming bookings.
Coordinate deliveries.
Manage extension requests.
Manage collection and return activities.
Record inspection results.
View provider earnings.
Providers must not access another provider's private information.
3.4 Rental Operations Team
Depending on assigned permissions, operations staff can:
Review booking issues.
Coordinate delivery.
Schedule collections.
Track overdue rentals.
Handle return exceptions.
Coordinate damage inspections.
Manage customer complaints.
Update operational statuses.
3.5 Administrator
Authorized administrators can manage:
Rental providers.
Rental categories.
Rental listings.
Rental policies.
Booking exceptions.
Cancellation rules.
Commission rules.
Deposit policies.
Refund workflows.
Service locations.
Reports and audit logs.
3.6 Finance Team
Where a separate finance role is implemented, it can manage:
Rental payment reconciliation.
Deposit settlement.
Approved deductions.
Refund processing.
Provider settlements.
Platform commissions.
Financial reports.

4. RENTAL APPLICATION USER JOURNEY
The standard rental journey is:
Customer opens the website.
Customer selects a city or enters a PIN code.
Customer opens the rental section.
Customer browses categories or searches for furniture.
Customer selects a rental product.
Customer checks rental availability.
Customer selects a start date and rental duration.
Customer enters the delivery location.
The application calculates rental charges.
Customer reviews delivery, deposit, and rental terms.
Customer submits the booking.
Customer completes the required payment.
Backend verifies payment and confirms the booking.
Rental provider prepares the furniture.
Delivery is scheduled.
Furniture is delivered to the customer.
Customer uses the furniture during the rental period.
Customer may request an eligible extension.
Customer requests or confirms furniture collection.
Furniture is collected and inspected.
The provider records the return outcome.
Any applicable additional charges are assessed.
The security deposit is settled according to the agreement.
The rental booking is closed.
Customer can view the completed rental in their account.
Each stage must have a defined status and responsible party.

5. RENTAL HOMEPAGE
Suggested route: /rentals
5.1 Rental Hero Banner
Display:
Main rental promotion.
Heading.
Description.
Rental call-to-action.
Optional supported-location information.
Example heading:
Rent Furniture for Your Home
Supporting message:
Discover furniture for your living room, bedroom, study, and other spaces, with rental options based on your location and required duration.
Features:
Responsive image.
Configurable text.
CTA navigation.
Optional campaign link.
Mobile-friendly layout.
5.2 Rental Categories
Possible categories:
Sofas.
Beds.
Mattresses.
Wardrobes.
Dining Tables.
Study Tables.
Office Furniture.
TV Units.
Recliners.
Complete Room Packages.
Only categories with relevant rental inventory should be promoted as available.
5.3 Featured Rental Furniture
Display selected rental products with:
Product image.
Product name.
Rental price.
Billing period.
Minimum duration, where applicable.
Location availability.
Provider name.
View Details button.
5.4 How Rental Works
Explain the process:
Choose your furniture.
Select your rental duration.
Confirm your location and booking.
Receive delivery according to the agreed schedule.
Return the furniture at the end of the rental period.
The process must reflect actual business operations.
5.5 Rental Benefits
Potential content:
Flexible rental periods.
Furniture for temporary accommodation.
Options for students and working professionals.
Furniture for temporary homes.
Furniture for offices or project spaces.
Delivery and collection options, where available.
Do not advertise benefits that the business cannot consistently provide.
5.6 Serviceable Locations
Display supported cities and service areas.
Customers should be able to check whether the selected product is available for rental in their location.
5.7 Rental FAQs
Include questions about:
Rental pricing.
Deposits.
Delivery.
Installation.
Rental extensions.
Damage.
Returns.
Cancellation.
Refunds.

6. LOCATION AND SERVICEABILITY
Location selection is essential because rental providers may operate in different cities.
6.1 Location Selector
Customers should be able to enter:
City.
PIN code.
Delivery address.
Browser location may be offered as an optional convenience, with appropriate permission.
6.2 Location Validation
The system should validate:
Input format.
Supported city.
Supported PIN code.
Provider service area.
Delivery capability.
6.3 Location-Based Rental Inventory
The system should identify rental inventory that can serve the selected location.
Availability must consider:
Rental provider.
Product inventory.
Provider's service area.
Requested rental dates.
Delivery capacity, where applicable.
Collection capability, where applicable.
6.4 Location Persistence
The selected location may be stored in the browser or customer account.
At checkout, the actual delivery address must be validated independently.
6.5 Unavailable Locations
If the requested location is not serviceable:
Display a clear message.
Explain that the selected product is unavailable for rental there.
Allow another location to be selected.
Suggest other eligible products or providers, if available.
The application must not allow customers to confirm a booking outside the provider's service area.

7. RENTAL CATEGORY PAGES
Suggested route: /rentals/category/[slug]
7.1 Category Information
Display:
Category name.
Category description.
Breadcrumbs.
Relevant subcategories.
Rental product count, if available.
Rental product grid.
7.2 Category Filters
Possible filters:
Rental price.
Furniture category.
Material.
Colour.
Size.
Provider.
Minimum rental duration.
Available start date.
City or PIN code.
Delivery availability.
Only applicable filters should be displayed.
7.3 Sorting
Potential sorting:
Recommended.
Lowest rental price.
Highest rental price.
Newest listings.
Highest rated, where genuine ratings exist.
7.4 Pagination
Support:
Page navigation or progressive loading.
Product counts.
Loading indicators.
Empty-result states.
Filter and sort states should be preserved where appropriate when navigating between pages.

8. RENTAL SEARCH
8.1 Search Input
Customers should be able to search by:
Product name.
Furniture category.
Product attributes.
Relevant keywords.
Provider name, where supported.
8.2 Search Suggestions
Potential suggestions:
Matching rental products.
Categories.
Popular searches.
Recent searches.
8.3 Search Results
Display:
Search query.
Matching products.
Rental prices.
Available filters.
Sorting options.
Location availability.
8.4 Search Result Validation
Search results must exclude listings that are:
Unpublished.
Suspended.
Ineligible for new bookings.
Outside the selected service area, where location filtering is applied.
Date-specific availability should be verified before the booking is confirmed.

9. RENTAL PRODUCT LISTINGS
Each rental product card should contain:
Product image.
Product name.
Short description, where useful.
Rental price.
Billing period.
Minimum rental duration, where applicable.
Security deposit indicator, if applicable.
Rental provider name.
Location availability.
View Details action.
9.1 Rental Price Display
Prices must be clearly labelled.
Examples:
₹800 per month.
₹250 per day.
₹1,500 per week.
These are illustrative prices only.
The application must not present a monthly price as a one-time payment.
9.2 Listing Status
Possible statuses:
Available.
Available From a Future Date.
Currently Unavailable.
Unavailable in Your Location.
Exact wording should match the actual inventory and booking rules.

10. RENTAL PRODUCT DETAIL PAGE
Suggested route: /rentals/[slug]
10.1 Product Information
Display:
Product name.
Product description.
Product images.
Dimensions.
Material.
Colour.
Weight, where relevant.
Condition, where applicable.
Assembly requirements.
Care instructions.
Provider name.
Rental price.
Minimum rental duration.
Deposit details, if applicable.
Rental policies.
10.2 Image Gallery
Features:
Main image.
Thumbnail images.
Image selection.
Responsive image rendering.
Enlarged image view, if supported.
Fallback for missing images.
10.3 Rental Provider Information
Display relevant public information:
Provider name.
City or service area.
Provider profile.
Delivery coverage.
Public support information, where appropriate.
Internal vendor documents and financial data must remain private.
10.4 Rental Terms
Customers must be able to review:
Rental period requirements.
Payment terms.
Deposit terms.
Delivery and collection conditions.
Damage policy.
Cancellation policy.
Extension policy.
Return policy.
Customers should be asked to acknowledge applicable rental terms before confirming a booking.
10.5 Rental Call to Action
Primary action:
Check Availability
The booking flow should not assume availability merely because the product detail page is visible.

11. RENTAL AVAILABILITY CALENDAR
The availability calendar is a critical component of the rental application.
11.1 Date Selection
Customers select:
Rental start date.
Rental duration or end date.
The application must enforce:
Valid dates.
Minimum rental duration.
Maximum duration, if configured.
Provider-specific restrictions.
Delivery scheduling constraints, if applicable.
11.2 Availability Calculation
The backend must consider:
Total rentable inventory.
Existing confirmed bookings.
Active rental periods.
Reserved inventory.
Preparation and turnaround periods.
Maintenance or unavailable periods.
Provider serviceability.
11.3 Preventing Double Bookings
Availability must be checked again when a customer submits a booking.
The system should use suitable database transactions, inventory reservations, or locking strategies to prevent overlapping bookings from exceeding available inventory.
A frontend calendar check alone is insufficient.
11.4 Temporary Reservations
If inventory is temporarily reserved during checkout:
Define the reservation duration.
Display a clear expiration message when relevant.
Release expired reservations.
Prevent expired reservations from being treated as confirmed bookings.
11.5 Unavailable Dates
Unavailable dates should be disabled or clearly identified.
If availability changes while the customer is checking out, the application must ask the customer to select another period.

12. RENTAL PRICE CALCULATION
The price calculator must provide a transparent estimate before the customer confirms the booking.
12.1 Rental Charges
Potential components:
Rental fee.
Delivery fee.
Installation fee.
Pickup fee, if charged upfront.
Applicable taxes.
Security deposit.
Valid discount.
Other disclosed charges.
12.2 Pricing Formula
The exact calculation depends on provider policy.
A typical calculation is:
Rental Amount Due = Rental Charges + Applicable Fees + Taxes + Deposit − Eligible Discounts
The deposit must be shown separately from recurring rental charges.
12.3 Rental Billing Models
The platform may support:
Daily pricing.
Weekly pricing.
Monthly pricing.
Fixed-period pricing.
Custom quotation pricing.
Each listing must specify its billing model.
12.4 Partial Periods
The business must define how partial billing periods are handled.
Examples:
A partial month may be charged proportionally.
A partial month may be charged as a full month.
Extensions may use a different pricing rule.
The application must not invent its own billing rule.
12.5 Price Revalidation
Before booking confirmation, the backend must recalculate:
Rental amount.
Duration.
Applicable discounts.
Delivery fees.
Taxes.
Deposit.
Final amount due.
The customer must confirm material price changes before proceeding.

13. RENTAL CART
Suggested route: /rentals/cart
Rental bookings have different requirements from one-time furniture purchases.
The recommended design is to maintain a dedicated rental cart and checkout flow.
13.1 Rental Cart Items
Display:
Product image.
Product name.
Rental provider.
Start date.
End date or duration.
Rental rate.
Estimated rental charges.
Deposit, if applicable.
Delivery location.
Remove item action.
13.2 Cart Editing
Customers should be able to:
Change rental dates.
Change quantity, where supported.
Remove a listing.
Return to product details.
Continue browsing rentals.
Any change must trigger a new availability and pricing check.
13.3 Multiple Rental Providers
If a rental cart includes products from different providers, the system must validate each provider's service area and availability independently.
If one provider cannot serve the address or requested dates, the customer should receive a clear explanation.
13.4 Rental Cart Summary
Display:
Rental subtotal.
Fees.
Taxes.
Discounts.
Deposit.
Total payable now.
Future recurring charges, where applicable.
The customer must be able to distinguish:
Amount payable now.
Amount payable later.
Recurring rental charges.
Potentially refundable deposit.

14. RENTAL CHECKOUT
Suggested route: /rentals/checkout
14.1 Checkout Steps
Recommended workflow:
Customer identification.
Delivery address.
Rental date confirmation.
Delivery and installation selection.
Rental terms acceptance.
Price summary.
Payment.
Booking confirmation.
14.2 Customer Details
Collect required details:
Full name.
Phone number.
Email address, where required.
Delivery address.
Additional delivery instructions, where useful.
14.3 Delivery Address
Validate:
Recipient name.
Phone number.
Address.
City.
State.
PIN code.
Serviceability.
The delivery address must be serviceable by the selected rental provider.
14.4 Rental Agreement
Before confirmation, display the relevant:
Rental duration.
Rental price.
Deposit amount.
Delivery conditions.
Collection conditions.
Damage policy.
Cancellation rules.
Extension rules.
Refund conditions.
Store the accepted agreement version and timestamp where required for auditability.
14.5 Checkout Validation
Before accepting the booking, the backend must validate:
Listing status.
Provider status.
Inventory.
Rental dates.
Service area.
Price.
Deposit.
Taxes and fees.
Customer details.
Agreement acceptance.

15. RENTAL PAYMENT MANAGEMENT
15.1 Supported Payment Methods
The application may support payment methods provided by the selected payment gateway, such as:
UPI.
Debit cards.
Credit cards.
Net banking.
Other supported methods.
Only configured payment methods should be shown.
15.2 Payment Types
The rental business must define whether the customer pays:
The entire rental amount upfront.
The first rental period upfront.
The rental amount plus deposit.
A booking advance followed by later charges.
Recurring rental payments.
Different providers may have different policies, subject to platform rules.
15.3 Payment Workflow
Customer confirms rental details.
Backend creates a pending booking or payment attempt.
Payment gateway processes the transaction.
Backend verifies the result.
Booking is confirmed only after required conditions are satisfied.
Customer receives confirmation.
A successful browser redirect must not be treated as proof of payment.
15.4 Failed Payments
If payment fails:
Display the failure.
Preserve valid booking details where possible.
Allow retry.
Prevent duplicate charges.
Release temporary inventory reservations according to the reservation policy.
15.5 Recurring Payments
If recurring billing is supported, the platform must define:
Billing dates.
Payment authorization.
Failed-payment handling.
Retry policy.
Customer notifications.
Late-payment consequences.
Cancellation of future recurring charges.
Recurring payments should not be assumed to exist merely because monthly rental pricing is offered.
15.6 Payment Security
Requirements:
Verify payment provider responses.
Verify webhooks.
Use idempotency where supported.
Recalculate amounts on the backend.
Maintain transaction records.
Protect payment references and personal information.

16. SECURITY DEPOSIT MANAGEMENT
A security deposit may be required for selected rental products.
16.1 Deposit Rules
Each applicable listing should specify:
Deposit amount or calculation rule.
Payment timing.
Refund eligibility.
Permitted deductions.
Inspection process.
Settlement timeline.
16.2 Deposit Display
The checkout should show:
Rental charges.
Security deposit.
Applicable taxes and fees.
Total amount due now.
Amount expected to be refundable, subject to the rental agreement.
16.3 Deposit Settlement
The settlement process should support:
Full deposit refund.
Partial refund.
Approved deduction.
Dispute or review.
Pending settlement.
16.4 Deposit Audit Trail
Record:
Original deposit amount.
Inspection findings.
Proposed deductions.
Reason for each deduction.
Approval.
Refund amount.
Payment reference.
Settlement status.
Customers should receive an explanation of deductions according to the agreed policy.

17. RENTAL BOOKING CONFIRMATION
After the backend confirms the booking, display a booking confirmation page.
17.1 Confirmation Information
Display:
Rental booking number.
Booking date.
Product.
Provider.
Rental start date.
Rental end date.
Delivery address.
Rental amount.
Deposit.
Payment status.
Delivery details, if available.
Customer support information.
17.2 Booking Confirmation Notifications
Where configured, send:
Booking confirmation email.
SMS confirmation.
Payment receipt.
Rental terms.
Delivery scheduling information.
17.3 Booking Status
Potential statuses:
Pending Payment.
Payment Processing.
Confirmed.
Provider Accepted.
Preparing.
Delivery Scheduled.
Out for Delivery.
Delivered.
Active Rental.
Extension Requested.
Return Requested.
Collection Scheduled.
Returned.
Inspection Pending.
Deposit Settlement Pending.
Completed.
Cancelled.
Disputed.
The final status model must be defined in coordination with the backend and operational workflows.

18. RENTAL CUSTOMER ACCOUNT
Suggested route: /account/rentals
18.1 Rental Booking List
Display:
Booking number.
Product name.
Provider.
Start date.
End date.
Rental amount.
Booking status.
Payment status.
View Details action.
18.2 Rental Booking Details
Display:
Booking information.
Product information.
Provider information.
Rental dates.
Address.
Charges.
Deposit details.
Payment history, where available.
Delivery status.
Collection status.
Accepted rental terms.
Support options.
18.3 Rental History
Customers should be able to view completed and cancelled rentals.
The system should distinguish historical bookings from active rentals.
18.4 Access Control
Customers must only access their own bookings.
A booking identifier in a URL must not be sufficient to access another customer's rental information.

19. DELIVERY AND INSTALLATION
19.1 Delivery Scheduling
The provider or operations team may configure available delivery slots.
The customer may:
Select an available slot.
Request a preferred delivery date.
View the confirmed delivery appointment.
A requested appointment must not be shown as confirmed until accepted by the relevant workflow.
19.2 Delivery Statuses
Potential statuses:
Awaiting Scheduling.
Scheduled.
Preparing.
Dispatched.
Out for Delivery.
Delivered.
Delivery Failed.
Rescheduled.
19.3 Delivery Confirmation
Record appropriate delivery information, such as:
Delivery timestamp.
Delivery status.
Customer acknowledgement, where supported.
Installation completion, if applicable.
Exception notes.
19.4 Delivery Failure
If delivery fails:
Record the reason.
Notify the customer.
Provide rescheduling instructions.
Record any applicable additional charge according to policy.
Update the booking and operational schedule.

20. ACTIVE RENTAL MANAGEMENT
Once the furniture has been delivered, the booking enters the active rental period.
20.1 Active Rental Details
Display:
Rental start date.
Expected end date.
Product details.
Rental provider.
Rental terms.
Next billing date, where applicable.
Extension eligibility.
Return instructions.
20.2 Rental Reminders
Potential reminders:
Upcoming rental start.
Upcoming rental end.
Upcoming recurring payment.
Overdue return.
Outstanding payment.
Reminder timing should be configurable.
20.3 Rental Issues
Customers may report:
Damaged furniture on delivery.
Missing components.
Product not matching the listing.
Maintenance issues.
Collection or delivery problems.
Each issue should be associated with the relevant rental booking.

21. RENTAL EXTENSION MANAGEMENT
21.1 Extension Request
The customer selects:
Existing rental booking.
New rental end date or extension duration.
Applicable extension option.
21.2 Extension Validation
The backend must check:
Product availability.
Subsequent reservations.
Provider rules.
Outstanding payments.
Extension eligibility.
Revised rental charges.
21.3 Extension Price
Display:
Additional rental duration.
Additional rental charges.
Applicable taxes.
Any other disclosed fees.
New rental end date.
21.4 Extension Confirmation
Workflow:
Customer requests an extension.
System checks availability.
Customer reviews the revised price.
Required approval is obtained, if applicable.
Customer completes required payment.
Backend confirms the extension.
Booking end date is updated.
Customer receives confirmation.
An extension must not be confirmed before all required conditions are met.
21.5 Extension Rejection
If the extension cannot be granted:
Display the reason, where appropriate.
Preserve the original confirmed end date.
Explain the required return process.

22. RENTAL CANCELLATION
22.1 Cancellation Eligibility
Eligibility depends on:
Booking status.
Time remaining before delivery.
Provider policy.
Payment status.
Rental agreement.
Applicable law.
22.2 Cancellation Workflow
Customer opens the booking.
Selects Cancel Booking.
Reviews the cancellation terms.
Selects a reason.
Submits the request.
System determines whether automatic cancellation is permitted or review is required.
Customer receives the cancellation result.
Any eligible refund is processed.
22.3 Cancellation Restrictions
The system should prevent inappropriate cancellation actions after a rental has entered a state where cancellation is no longer permitted.
If manual review is required, the booking should remain in an appropriate pending state.
22.4 Cancellation Refund
Display:
Original amount paid.
Applicable cancellation charges.
Refund amount.
Refund status.
Expected processing information, where available.
The refund calculation must follow the configured policy.

23. RENTAL RETURN AND COLLECTION
23.1 Return Initiation
Depending on the provider's process, the customer may:
Request collection.
Select a collection date.
Confirm return instructions.
Contact support to arrange the return.
23.2 Return Validation
The system should verify:
Rental end date.
Extension status.
Outstanding charges.
Collection eligibility.
Provider collection coverage.
23.3 Collection Scheduling
Display:
Available collection dates.
Confirmed collection slot.
Collection address.
Preparation instructions.
Relevant charges, if applicable.
23.4 Collection Statuses
Potential statuses:
Return Requested.
Awaiting Approval.
Collection Scheduled.
Collection Assigned.
Out for Collection.
Collected.
Collection Failed.
Rescheduled.
23.5 Return Confirmation
Record:
Collection timestamp.
Collected product.
Collection status.
Reported condition.
Inspection requirement.
Relevant notes or evidence.
The system should not mark the booking fully completed merely because the customer requested collection.

24. FURNITURE INSPECTION AND DAMAGE ASSESSMENT
24.1 Inspection Process
After collection, the provider may inspect the furniture.
Potential checks:
Product identity.
Product completeness.
Structural condition.
Surface damage.
Missing components.
Cleaning requirements.
Damage beyond normal wear.
24.2 Inspection Outcome
Potential outcomes:
No Issues Found.
Cleaning Required.
Minor Damage.
Significant Damage.
Missing Components.
Further Review Required.
The exact inspection model must be defined by the business.
24.3 Damage Evidence
Where appropriate, record:
Inspection photographs.
Inspection date.
Inspector.
Findings.
Repair or replacement estimate.
Proposed deduction.
Supporting notes.
24.4 Customer Notification
If deductions are proposed:
Notify the customer.
Explain the reason.
Display the proposed amount.
Provide the applicable dispute or review process.
24.5 Disputes
Customers should have a defined way to dispute an assessment.
The system should record:
Dispute reason.
Supporting evidence.
Review status.
Decision.
Final settlement.
Deductions must follow the agreed rental terms and applicable legal requirements.

25. DEPOSIT REFUNDS AND FINAL SETTLEMENT
25.1 Settlement Inputs
The final settlement may consider:
Deposit paid.
Approved damage deductions.
Outstanding rental fees.
Approved late-return charges.
Other contractually permitted charges.
Previous refunds or adjustments.
25.2 Settlement Calculation
A general calculation is:
Final Deposit Refund = Deposit Paid − Approved Deductions − Outstanding Eligible Charges
This calculation is subject to the actual rental agreement and applicable law.
The application must not apply undisclosed deductions.
25.3 Settlement Workflow
Provider records the return.
Inspection is completed, where required.
Applicable charges are calculated.
Proposed deductions are reviewed and approved.
Final settlement is recorded.
Eligible refund is initiated.
Payment provider confirms the refund result.
Customer receives a settlement statement.
Booking is closed when all required conditions are satisfied.
25.4 Settlement Statuses
Potential statuses:
Pending Inspection.
Under Review.
Awaiting Approval.
Settlement Approved.
Refund Processing.
Partially Refunded.
Refunded.
Disputed.
Settlement Completed.
25.5 Refund Failure
If the refund fails:
Record the failure.
Preserve the settlement record.
Notify the authorized finance team.
Retry according to payment-provider capabilities.
Avoid duplicate refunds.
Update the customer when the status changes.

26. CUSTOMER SUPPORT
26.1 Rental Support Categories
Potential categories:
Booking issue.
Payment issue.
Delivery delay.
Installation issue.
Product damage.
Product mismatch.
Rental extension.
Return collection.
Deposit settlement.
Refund.
Other rental issue.
26.2 Support Request Form
Fields may include:
Booking number.
Issue category.
Description.
Attachments, if supported.
Preferred contact method.
26.3 Support Request Tracking
Where ticket tracking is implemented, customers should be able to:
View submitted requests.
View request status.
Read responses.
Provide additional information.
View resolution details.

27. RENTAL NOTIFICATIONS
27.1 Booking Notifications
Booking received.
Payment successful.
Booking confirmed.
Booking rejected, if applicable.
Booking cancelled.
27.2 Delivery Notifications
Delivery scheduling request.
Delivery confirmed.
Dispatch update.
Delivery reminder.
Delivery completed.
Delivery exception.
27.3 Active Rental Notifications
Upcoming billing date.
Payment failure.
Upcoming rental end.
Extension decision.
Overdue rental reminder.
27.4 Return Notifications
Collection request received.
Collection scheduled.
Collection reminder.
Furniture collected.
Inspection completed.
Deposit settlement update.
Refund initiated.
Refund completed or failed.
Notifications should be triggered by verified backend events and should not be duplicated when events are retried.

28. RENTAL PROVIDER FUNCTIONALITY
This section identifies the provider capabilities required to operate the rental marketplace. The provider dashboard will require a separate detailed specification.
28.1 Provider Onboarding
Potential workflow:
Provider registers.
Provides business information.
Provides contact information.
Selects service cities.
Submits required documents.
Accepts marketplace terms.
Completes required verification.
Administrator approves or rejects the application.
28.2 Rental Listings
Approved providers should be able to:
Create listings.
Upload product images.
Define specifications.
Set rental prices.
Define billing periods.
Configure deposits.
Set minimum rental duration.
Configure service areas.
Publish or unpublish listings, subject to policy.
28.3 Inventory Management
Providers must be able to manage:
Available rental quantity.
Active rentals.
Upcoming bookings.
Maintenance periods.
Unavailable dates.
Preparation time.
Returned furniture awaiting inspection.
28.4 Booking Management
Providers should be able to:
View incoming bookings.
Accept or reject bookings where the business model permits.
Prepare furniture.
Coordinate delivery.
Manage extension requests.
Schedule collections.
Record returns.
Complete inspection records.
28.5 Provider Financial Information
Subject to permissions, providers may view:
Rental revenue.
Platform commission.
Approved fees.
Refund adjustments.
Deposit liabilities.
Pending settlements.
Completed payouts.
Provider financial data must be isolated from other vendors.

29. ADMINISTRATOR RENTAL MANAGEMENT
A separate administrator specification should define these workflows in detail.
29.1 Rental Provider Administration
Review provider applications.
Approve or reject providers.
Suspend providers.
Manage service locations.
Review listing compliance.
29.2 Rental Listing Administration
Review listings.
Manage categories.
Review pricing issues.
Suspend prohibited listings.
Monitor inventory discrepancies.
29.3 Booking Administration
View all bookings.
Search by booking number.
Filter by provider, location, date, and status.
Investigate booking failures.
Resolve booking disputes.
Handle operational exceptions.
29.4 Financial Administration
Review payments.
Reconcile deposits.
Approve deductions.
Manage refunds.
Calculate commissions.
Track provider payouts.
Review financial exceptions.
29.5 Audit Logs
Record important actions:
Provider approval.
Booking status changes.
Price changes.
Cancellation decisions.
Deposit deductions.
Refund approvals.
Payout adjustments.
Each record should identify the actor, timestamp, action, and relevant entity.

30. RENTAL REVENUE MODEL
The business should define its revenue model before implementing financial calculations.
30.1 Rental Income From Own Inventory
Divya Furniture World earns the rental charges for its own rental products, subject to operating costs and other expenses.
30.2 Marketplace Commission
For partner rental bookings, the platform may earn a configured commission.
The commission policy must define:
Commission rate or amount.
Whether the rate varies by category.
Whether the commission applies to rental charges only.
Whether delivery charges are included.
Whether discounts affect the commission base.
How cancellations and refunds adjust commission.
How deposit funds are treated.
Security deposits should not automatically be treated as platform revenue.
30.3 Optional Revenue Streams
Possible additional revenue:
Vendor subscription plans.
Featured rental listings.
Promoted placement.
Delivery services.
Installation services.
Other disclosed services.
These are optional business models and are not assumed to be implemented.
30.4 Financial Reporting
The platform should distinguish:
Gross rental charges.
Discounts.
Taxes.
Delivery fees.
Platform commission.
Provider earnings.
Deposits held.
Refunds.
Approved deductions.
Payouts.
Outstanding balances.
Financial reports must avoid counting refundable deposits as earned revenue.

31. PROPOSED RENTAL APPLICATION ROUTES
These are proposed routes, not confirmation that they exist in the current application.
Route
Purpose
/rentals
Rental homepage
/rentals/category/[slug]
Rental category listing
/rentals/[slug]
Rental product details
/rentals/cart
Rental cart
/rentals/checkout
Rental checkout
/rentals/confirmation/[id]
Rental confirmation
/account/rentals
Customer rental history
/account/rentals/[id]
Rental booking details
/account/rentals/[id]/extend
Extension request
/account/rentals/[id]/return
Return or collection request
/vendors/rentals
Provider rental management entry
/vendor-dashboard/rentals
Provider rental dashboard
/admin/rentals
Administrative rental management
/admin/rentals/bookings
Rental booking administration
/admin/rentals/providers
Rental provider administration
/admin/rentals/settlements
Deposit and settlement management

Before implementation, reconcile these paths against the existing Next.js App Router structure to avoid duplicate or conflicting routes.

32. RENTAL DATA MODEL
The following are proposed logical entities. They must be reconciled with the existing database and backend.
32.1 Rental Provider
Potential fields:
Provider ID.
Business name.
Contact information.
Verification status.
Approval status.
Service areas.
Rental policy reference.
Created and updated timestamps.
32.2 Rental Listing
Potential fields:
Listing ID.
Provider ID.
Product reference.
Listing title.
Description.
Images.
Rental price.
Billing period.
Minimum duration.
Deposit rules.
Service area.
Publication status.
32.3 Rental Inventory
Potential fields:
Inventory ID.
Listing ID.
Total rentable quantity.
Available quantity.
Maintenance quantity.
Inventory location.
Inventory status.
Availability must be calculated with respect to active bookings and reservations rather than relying only on a manually entered available quantity.
32.4 Rental Booking
Potential fields:
Booking ID.
Booking number.
Customer ID or secure guest reference.
Provider ID.
Listing ID.
Quantity.
Start date.
End date.
Rental charges.
Delivery fees.
Tax.
Deposit.
Total payable.
Payment status.
Booking status.
32.5 Rental Booking Item
If a booking supports multiple rental products, each item should have its own:
Listing reference.
Provider reference.
Quantity.
Rental period.
Price snapshot.
Fulfilment status.
If multiple providers are involved, the system must maintain provider-specific fulfilment and settlement records.
32.6 Rental Payment
Potential fields:
Payment ID.
Booking reference.
Payment type.
Amount.
Currency.
Payment provider reference.
Payment status.
Refund status.
Created timestamp.
Payment types may include rental charges, deposits, extensions, and additional approved charges.
32.7 Rental Extension
Potential fields:
Extension ID.
Booking ID.
Original end date.
Requested end date.
Additional charges.
Approval status.
Payment status.
Final end date.
32.8 Rental Return
Potential fields:
Return ID.
Booking ID.
Return request date.
Scheduled collection date.
Actual collection date.
Condition status.
Inspection status.
Return status.
32.9 Deposit Settlement
Potential fields:
Settlement ID.
Booking ID.
Deposit amount.
Approved deductions.
Refund amount.
Reason for deductions.
Approval status.
Refund reference.
Settlement status.
32.10 Rental Audit Log
Potential fields:
Audit ID.
Actor ID.
Actor role.
Action.
Entity type.
Entity ID.
Timestamp.
Relevant change details.
Sensitive data should be stored and exposed according to appropriate access controls.

33. SECURITY AND BUSINESS RULES
33.1 Customer Authorization
Customers must only access their own bookings, payments, addresses, and rental records.
33.2 Provider Authorization
Providers must only manage their own rental inventory, bookings, and financial records.
33.3 Administrator Permissions
Administrative actions should follow role-based permissions.
Sensitive financial actions may require additional authorization or approval.
33.4 Price Integrity
The backend must calculate rental prices, deposits, taxes, discounts, and final totals.
Client-submitted totals must not be trusted.
33.5 Inventory Integrity
The backend must prevent confirmed bookings from exceeding available rental inventory.
33.6 Payment Integrity
The system must verify payment status with the payment provider and prevent duplicate processing.
33.7 Deposit Integrity
Deposit deductions must be recorded, justified, and approved according to policy.
33.8 Rental Terms
The system should record the applicable rental agreement and customer acceptance.
33.9 Privacy
Private customer, provider, and payment information must not be exposed through public routes or unauthorized API responses.
33.10 Auditability
Important booking, payment, return, and settlement changes should be traceable.

34. ERROR HANDLING
The rental application must handle the following scenarios.
Product Errors
Listing unavailable.
Listing removed.
Provider suspended.
Missing product information.
Product unavailable in the selected location.
Availability Errors
Requested dates unavailable.
Inventory changed during checkout.
Overlapping booking conflict.
Extension not possible.
Collection slot unavailable.
Payment Errors
Payment declined.
Payment pending.
Payment provider timeout.
Duplicate payment attempt.
Refund failure.
Delivery and Return Errors
Delivery failed.
Collection failed.
Address not serviceable.
Customer unavailable.
Product condition disputed.
System Errors
API failure.
Network failure.
Expired session.
Invalid booking identifier.
Unauthorized access.
The website should display helpful messages and preserve valid user input wherever possible.
Internal stack traces and sensitive API responses must never be displayed to customers.

35. ACCEPTANCE CRITERIA
The rental application should meet the following requirements before production release.
Rental Discovery
Customers can browse published rental products.
Search and category filters work.
Rental prices have clear billing periods.
Provider information is accurate.
Location availability is handled correctly.
Availability
Customers can select valid rental dates.
Minimum rental durations are enforced.
Inventory is checked on the backend.
Overlapping bookings cannot exceed available inventory.
Availability changes are handled safely.
Booking
Customers can review the complete rental amount.
Rental terms are available before confirmation.
Booking details are saved correctly.
Booking confirmation follows verified backend conditions.
Customers can retrieve their booking details.
Payments
Payment results are verified.
Failed payments do not falsely confirm bookings.
Duplicate payments are handled safely.
Deposit amounts are shown separately.
Refund processing is traceable.
Delivery
Delivery details are available to the customer.
Scheduling status is accurate.
Delivery exceptions are recorded.
Delivery completion updates the booking correctly.
Extensions
Extension availability is checked.
Additional charges are calculated correctly.
Required payment is completed.
Confirmed rental dates are updated correctly.
Returns
Customers can request eligible returns.
Collection status is tracked.
Inspection results are recorded where required.
Damage disputes can be handled.
Deposit settlement is traceable.
Security
Customers cannot access other customers' bookings.
Providers cannot access another provider's private records.
Financial actions follow the correct permissions.
Prices and payment statuses are validated server-side.
User Experience
Responsive layouts work on mobile and desktop.
Loading and empty states are available.
Errors are understandable.
Rental and purchase transactions are clearly distinguished.
Existing website styling is preserved unless explicitly changed.

36. IMPLEMENTATION ROADMAP
Phase 1: Existing Application Audit
Review the current Next.js routes.
Review existing components and CSS.
Inspect authentication.
Inspect product APIs and database models.
Identify existing rental-related functionality.
Document missing backend capabilities.
Phase 2: Rental Catalogue
Rental landing page.
Rental categories.
Rental search.
Rental product cards.
Rental product details.
Location filtering.
Phase 3: Availability and Pricing
Rental date selection.
Inventory availability.
Pricing rules.
Deposit calculation.
Serviceability validation.
Phase 4: Booking and Payments
Rental cart.
Rental checkout.
Booking creation.
Payment integration.
Confirmation.
Payment failure handling.
Phase 5: Customer Rental Account
Booking list.
Booking details.
Delivery tracking.
Extension requests.
Return requests.
Customer support.
Phase 6: Provider Operations
Provider rental dashboard.
Listing management.
Inventory management.
Booking management.
Delivery and collection operations.
Return inspections.
Phase 7: Financial Operations
Deposit management.
Refund processing.
Commission calculation.
Provider settlements.
Financial reconciliation.
Phase 8: Production Readiness
Security tests.
Payment tests.
Inventory concurrency tests.
Mobile and desktop testing.
Performance validation.
End-to-end workflow tests.
Monitoring and error handling.

37. FINAL SCOPE
The rental application must provide a complete lifecycle:
Discover → Select Location → Browse → Check Availability → Calculate Price → Book → Pay → Confirm → Deliver → Use → Extend if Needed → Request Return → Collect → Inspect → Settle Deposit → Close Booking
The platform must support both Divya Furniture World's own rental inventory and approved third-party rental providers.
The rental experience should be integrated with the wider furniture marketplace while maintaining distinct rules for rental pricing, booking dates, recurring charges, deposits, collection, and returns.
Implementation principle: This document describes the intended system. It does not confirm that every feature already exists in the current codebase. Existing routes, components, APIs, database models, and styles must be audited before implementation. Reuse working functionality wherever appropriate, preserve the existing website design, and implement the missing functionality without creating duplicate routes or breaking existing sales features.
End of Rental Application Functional Documentation.

