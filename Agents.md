# GLOBAL AI AGENT INSTRUCTIONS

## Targeted Analysis | Minimal File Access | Controlled Modifications | Performance Optimization

---

# 1. CORE OBJECTIVE

You are working inside an existing production-oriented software project.

Your responsibility is to understand the user's request, identify the exact working scope, inspect the minimum required files, implement the requested changes and verify the result.

The project may contain multiple modules, components, APIs, services, utilities and documentation files.

You MUST NOT analyse the entire repository for every prompt.

### Fundamental Principle

USER PROMPT = WORKING SCOPE.

Every task must follow these principles:

1. Read only relevant documentation.
2. Analyse only relevant source files.
3. Understand existing implementation before changing code.
4. Modify only necessary files.
5. Preserve existing functionality.
6. Preserve existing UI and design.
7. Avoid unnecessary refactoring.
8. Verify the requested changes.
9. Stop when the task is completed.

The objective is targeted development, not repeated full-project analysis.

---

# 2. INSTRUCTION FILE PRIORITY

Before executing any task, follow the applicable instruction hierarchy:

1. Root AGENTS.md.
2. Relevant nested AGENTS.md files.
3. User's current task instructions.
4. Relevant project documentation.
5. Existing project implementation and conventions.

If instructions conflict, follow the more specific applicable instruction, subject to higher-priority instructions and the user's current request.

Never ignore an applicable AGENTS.md file.

---

# 3. DOCUMENTATION DIRECTORY

The project has a centralized documentation directory:

`/documentation/`

This directory contains the project's functional and module-level documentation.

It may contain multiple documents covering different modules.

### Documentation Is the Source of Requirements

Before implementing a task:

1. Identify the module mentioned in the user's prompt.
2. Identify the relevant documentation file.
3. Read only the relevant document or section.
4. Extract the requirements necessary for the task.
5. Compare the requirements with the existing implementation.

### STRICT DOCUMENTATION RULES

* Never read all documentation files automatically.
* Never open all six documents for a single-module task.
* Never repeatedly analyse unrelated documentation.
* Never read backend documentation for a UI-only task unless necessary.
* Never read UI documentation for an unrelated backend-only task.
* Never modify documentation without explicit permission.
* Never invent requirements that are not documented.
* Never assume undocumented behaviour.

### Documentation Selection

Use this approach:

| User Request           | Documentation Required         |
| ---------------------- | ------------------------------ |
| Dashboard UI           | Dashboard documentation        |
| Booking UI             | Booking documentation          |
| Category UI            | Category documentation         |
| Form validation        | Relevant module documentation  |
| API integration        | Relevant API documentation     |
| Backend functionality  | Relevant backend documentation |
| Global UI changes      | Global UI documentation        |
| Complete project audit | All relevant documentation     |

If documentation/INDEX.md exists, use it to identify the correct document.

If INDEX.md does not exist, perform a targeted filename search instead of opening every document.

---

# 4. TASK CLASSIFICATION

Before accessing source files, classify the user's request.

### TYPE A: UI TASK

Examples:

* Fix alignment.
* Change button spacing.
* Update table design.
* Fix responsive layout.
* Update modal.
* Correct dropdown positioning.

Action:

* Read relevant UI documentation.
* Inspect the target component.
* Inspect directly related CSS.
* Inspect direct dependencies only when necessary.
* Implement the requested UI change.

### TYPE B: FRONTEND FUNCTIONALITY

Examples:

* Fix filtering.
* Implement pagination.
* Fix form submission.
* Correct navigation.
* Fix state management.

Action:

* Inspect the relevant component.
* Inspect directly related hooks, utilities or services.
* Preserve existing UI.
* Implement only the requested functionality.

### TYPE C: BACKEND TASK

Examples:

* Fix API response.
* Implement endpoint.
* Fix database query.
* Update validation.
* Correct authentication.

Action:

* Inspect relevant controller, service, route, model and validation files as required.
* Preserve existing API contracts unless instructed otherwise.
* Avoid unrelated frontend changes.

### TYPE D: API INTEGRATION

Examples:

* Integrate listing API.
* Fix details API.
* Update request parameters.
* Correct response mapping.

Action:

* Inspect the relevant API service.
* Inspect the target component.
* Verify the expected request and response structures.
* Modify only the required integration.

### TYPE E: BUG FIX

Examples:

* Page showing blank.
* Incorrect redirect.
* API called twice.
* Dropdown not opening.
* Data not displaying.

Action:

* Reproduce or trace the specific issue.
* Identify the root cause.
* Inspect the minimum required files.
* Fix the root cause.
* Avoid unrelated code changes.

### TYPE F: REFACTORING

Examples:

* Remove duplicate code.
* Improve folder structure.
* Clean unused files.
* Optimize project architecture.

Action:

* Perform broader analysis only within the scope explicitly requested.
* Identify dependencies before modifying or deleting files.
* Preserve existing functionality.

### TYPE G: COMPLETE PROJECT AUDIT

Only when the user explicitly requests a complete project audit may you analyse the entire repository.

Do not treat ordinary feature requests as project audits.

---

# 5. TARGETED FILE DISCOVERY

The user may mention a component, page, API or module.

Use the following file discovery strategy.

### Step 1: Identify the target

Example:

User prompt:

"Fix the alignment issue in BookingDetails.jsx."

Target:

* BookingDetails.jsx

### Step 2: Inspect direct dependencies

Only inspect files that directly affect the requested implementation.

Examples:

* BookingDetails.css
* BookingDetails.module.css
* Directly imported UI components.
* Relevant API service, if required.

### Step 3: Stop expanding the search

Do not recursively inspect:

* All booking components.
* All API services.
* All CSS files.
* All utilities.
* All project modules.

Only expand the scope when a direct dependency requires it.

### Search Rules

Prefer targeted searches.

Examples:

Find a known component:

`rg --files -g "BookingDetails.jsx"`

Find a specific function:

`rg -n "populateRetreatData" src/`

Find direct imports:

`rg -n "BookingDetails" src/`

Find a specific API:

`rg -n "getBookingById" src/`

Do not execute broad searches without a reason.

---

# 6. STRICT FILE MODIFICATION POLICY

This is a critical requirement.

Only modify files necessary for the user's requested task.

### If the user mentions specific files:

Treat those files as the primary working scope.

Do not modify additional files unless technically necessary.

### Before modifying an additional file:

1. Identify the dependency.
2. Explain why modification is necessary.
3. Check whether the task can be completed without modifying it.
4. Keep additional changes minimal.

### Never perform these actions without permission:

* Rename existing files.
* Delete existing files.
* Move components.
* Change folder structures.
* Rewrite unrelated components.
* Refactor unrelated modules.
* Replace existing utilities.
* Introduce duplicate files.
* Upgrade dependencies.
* Change configuration files.
* Modify database schemas.
* Change API contracts.

Do not make unrelated improvements simply because you notice them.

---

# 7. UI AND DESIGN PRESERVATION

The existing UI is important.

For every frontend task, preserve the existing design unless the user explicitly requests a redesign.

### Preserve:

* Existing page layout.
* Component positioning.
* Existing CSS.
* Colours.
* Typography.
* Font sizes.
* Margins.
* Padding.
* Borders.
* Border radius.
* Shadows.
* Images.
* Icons.
* Animations.
* Transitions.
* Responsive behaviour.
* Existing interactions.

### UI Documentation Rules

The relevant documentation inside `/documentation/` defines the intended UI requirements.

Before changing UI:

1. Consult the relevant module documentation.
2. Understand the documented layout.
3. Inspect the current implementation.
4. Identify the exact difference.
5. Correct only the requested issue.

### Strict Restrictions

* Do not redesign a page when asked to fix alignment.
* Do not change colours when asked to fix spacing.
* Do not replace existing CSS unnecessarily.
* Do not introduce a new design system.
* Do not change other pages to solve a local UI issue.
* Do not replace existing assets with new assets.
* Do not change responsive layouts unnecessarily.

---

# 8. FRONTEND DEVELOPMENT RULES

When working on React, Next.js or other frontend modules:

* Follow the existing project architecture.
* Reuse existing components.
* Reuse existing hooks.
* Reuse existing utilities.
* Preserve existing state management.
* Preserve existing routing.
* Preserve existing event handling.
* Preserve existing loading states.
* Preserve existing error handling.
* Preserve existing validation.
* Preserve existing API integrations.

Do not introduce a new library for functionality that already exists.

Do not duplicate components.

Do not move logic unnecessarily between components.

Do not change unrelated pages.

---

# 9. BACKEND DEVELOPMENT RULES

When working on Node.js, Express.js or other backend modules:

* Preserve existing architecture.
* Preserve existing route structures.
* Preserve existing controllers.
* Preserve existing services.
* Preserve existing middleware.
* Preserve authentication.
* Preserve authorization.
* Preserve RBAC.
* Preserve database relationships.
* Preserve existing business logic.

### API Protection

Do not unnecessarily change:

* HTTP methods.
* API endpoints.
* Request parameters.
* Response structures.
* Status codes.
* Authentication requirements.
* Authorization requirements.
* Validation rules.

When API changes are explicitly requested, identify their impact before implementation.

---

# 10. DATABASE AND DATA PROTECTION

Database changes require particular care.

Never modify the following without an explicit requirement:

* Existing database schemas.
* Tables.
* Columns.
* Relationships.
* Foreign keys.
* Migrations.
* Existing records.
* Production data.

Do not execute destructive database commands without explicit authorization.

Never reset or drop a database as part of an ordinary bug fix.

---

# 11. API INTEGRATION RULES

For API-related tasks:

1. Identify the existing API service.
2. Inspect the relevant endpoint.
3. Understand the request structure.
4. Understand the response structure.
5. Inspect the component consuming the API.
6. Make the minimum required changes.

### Avoid:

* Duplicate API calls.
* Unnecessary API requests.
* Unnecessary changes to endpoints.
* Replacing existing service architecture.
* Duplicating API functions.
* Changing unrelated response mappings.

Preserve existing API behaviour wherever possible.

---

# 12. CODE QUALITY

All modifications must follow existing project conventions.

### Requirements

* Write clean and maintainable code.
* Avoid duplicate logic.
* Avoid unnecessary abstractions.
* Use meaningful variable names.
* Handle errors appropriately.
* Preserve existing coding patterns.
* Avoid unnecessary comments.
* Avoid unused imports.
* Avoid unused variables.
* Avoid unnecessary dependencies.

Do not refactor working code without a clear reason.

---

# 13. PERFORMANCE AND TOKEN OPTIMIZATION

The project may be large.

Optimize every task for focused execution.

### Mandatory Practices

* Do not analyse the entire repository for small tasks.
* Do not read unrelated files.
* Do not open all documentation files.
* Do not repeat file inspection unnecessarily.
* Do not generate unnecessary summaries of the project.
* Do not execute unnecessary terminal commands.
* Do not install unnecessary dependencies.
* Do not perform unrelated refactoring.
* Do not inspect generated build files unless required.
* Do not repeatedly inspect node_modules.

### Preferred Approach

Use this sequence:

TARGET → DOCUMENTATION → FILE INSPECTION → IMPLEMENTATION → VERIFICATION → REPORT.

Do not expand beyond this sequence without a technical reason.

Note: These instructions control agent behaviour. They do not disable background indexing, caching or repository scanning performed internally by individual AI tools.

---

# 14. TERMINAL COMMAND RULES

Execute only commands necessary for the current task.

### Allowed Examples

Find files:

`rg --files -g "TargetComponent.jsx"`

Find specific code:

`rg -n "functionName" src/`

Check Git changes:

`git status --short`

Inspect modified files:

`git diff --stat`

Inspect actual changes:

`git diff`

Run relevant lint checks:

`npm run lint`

Run relevant tests:

`npm test`

Build when appropriate:

`npm run build`

### Command Restrictions

* Do not run the entire test suite for every CSS change.
* Do not run a production build for every minor UI change.
* Do not install packages unnecessarily.
* Do not delete files through terminal commands without permission.
* Do not reset Git changes.
* Do not overwrite existing user modifications.
* Do not execute destructive commands.

Use the project's existing package scripts.

Do not assume a script exists without checking package.json when necessary.

---

# 15. GIT AND EXISTING CHANGES PROTECTION

Before modifying files, check the relevant working tree state when appropriate.

Never overwrite existing user changes.

Never automatically:

* Reset the repository.
* Revert unrelated changes.
* Delete uncommitted work.
* Force push.
* Rewrite Git history.
* Commit changes without permission.

When reporting modifications, distinguish your changes from pre-existing changes whenever possible.

---

# 16. ERROR HANDLING AND DEPENDENCY INSPECTION

If the requested task cannot be completed using the identified files:

1. Identify the missing dependency.
2. Inspect only that dependency.
3. Determine the actual root cause.
4. Avoid expanding the scope unnecessarily.
5. Implement the smallest safe solution.

If the requirements are ambiguous or conflict with existing behaviour, ask for clarification when the ambiguity materially affects implementation.

Do not guess critical business logic.

---

# 17. VERIFICATION REQUIREMENTS

After implementation, verify the changes proportionately.

### UI Changes

Check:

* Requested alignment.
* Existing layout preservation.
* CSS behaviour.
* Responsive behaviour where relevant.

### Frontend Functionality

Check:

* Expected user interaction.
* State updates.
* Data rendering.
* Error handling.

### Backend Changes

Check:

* Request handling.
* Response structure.
* Validation.
* Error handling.

### API Integration

Check:

* Endpoint.
* Request parameters.
* Response mapping.
* Loading and error states.

### General Rule

Do not claim that something was tested if it was not tested.

If verification could not be completed, clearly mention why.

---

# 18. COMPLETION REPORT

After completing every task, provide a concise report.

Use this structure:

## Task Completed

Describe the requested task.

## Documentation Referenced

List the documentation files or sections consulted.

## Files Inspected

List the primary files inspected.

## Files Modified

List only files actually modified.

## Changes Implemented

Explain the changes briefly.

## Verification

Mention the checks performed.

## Scope Confirmation

Confirm whether unrelated files and functionality remained unchanged.

Do not generate lengthy reports for simple tasks.

---

# 19. SPECIAL COMMAND INTERPRETATION

Follow these rules when the user gives specific instructions.

### "Only this file"

Modify only the specified file.

Do not modify dependencies unless absolutely necessary. If another file is required, explain the limitation before expanding scope.

### "Don't change the design"

Preserve the existing UI completely.

### "Use documentation"

Consult only the relevant documentation.

### "Analyse the complete project"

Perform a broader repository analysis within the requested scope.

### "Fix only the bug"

Identify and fix the root cause without unrelated improvements.

### "Clean the project"

Inspect the explicitly requested cleanup scope first. Never delete files without checking references and dependencies.

### "Optimize the code"

Optimize only the requested functionality or module.

### "Convert HTML to React"

Preserve the existing layout, styling, positioning, assets and functionality unless the user requests changes.

---

# 20. FINAL NON-NEGOTIABLE RULES

1. Read this AGENTS.md before starting.
2. Identify the exact task.
3. Read only relevant documentation.
4. Inspect only necessary files.
5. Never analyse the entire repository unnecessarily.
6. Never modify unrelated files.
7. Never redesign without permission.
8. Never change existing functionality unnecessarily.
9. Never delete user files without permission.
10. Preserve existing architecture.
11. Verify the requested implementation.
12. Report actual changes.
13. Stop when the task is completed.

---

# FINAL PRINCIPLE

BE PRECISE.
BE MINIMAL.
BE FAST.
PRESERVE EXISTING CODE.
PRESERVE EXISTING DESIGN.
FOLLOW DOCUMENTATION.
FOLLOW THE USER'S EXACT REQUEST.

The user controls the working scope.

Every AI coding agent must respect that scope.
