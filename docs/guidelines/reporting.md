# ZenixUI — Reporting Guidelines

## Two Modes of Reporting

To maintain velocity while ensuring accountability, reporting requirements are split into two modes depending on the scope of the change.

### 1. Lightweight Reporting Mode
Use this for trivial changes:
- Typos and copy updates
- Spacing, padding, or layout adjustments
- Color and token value updates
- Minor refactors without architectural impact

**Required for Lightweight Mode:**
- Briefly list the files modified and what changed.
- Run verification (`pnpm build`, etc.) but you do NOT need to print the full output or provide a conversion/architecture hypothesis.
- Example: "Updated padding in `Button.tsx` from `8px` to `10px`. Build passed."

### 2. Full Reporting Mode
Use this for substantial changes:
- API changes (requires Rule 14 analysis)
- Architecture or logic changes
- New components or modules
- CLI updates

**Required for Full Mode:**
- Complete code output (see Rule 1 below).
- Architecture/Conversion hypothesis if applicable.
- Full verification logs (see Rule 4 below).
- End of session summary.

---

## 1. Complete Code Output (Full Mode)

For EVERY modified or newly created file:
* Show the COMPLETE file contents.
* Never show only snippets or diffs.
* Never omit files that were modified.
* Never summarize code changes.

If a file is too large to fit in one response:
* Create a file named `updated.md` in the artifacts directory.
* Include the complete contents of every modified or newly created file inside `updated.md`.

---

## 2. The 5+ Files Rule (Mandatory)

**When more than 5 files are modified in a single session, automatically generate `updated.md` containing the complete contents of every modified and newly created file instead of trying to inline them.**
Never omit a file because of response length.

---

## 3. API Change Justification (Rule 14 - Mandatory)

Before changing any public component API:
1. List every existing usage.
2. State whether the API is: Backward compatible, Soft deprecated, or Breaking.
3. If breaking:
   a. Explain why.
   b. Provide migration strategy.
   c. Update every usage.
   d. Verify zero regressions.

---

## 4. Verification & Terminal Output (Full Mode)

Always run the build and show the COMPLETE output.

```
Command Run:
pnpm --filter website build

Terminal Output:
<exact text>
```
Label terminal output cleanly with 🟢 SUCCESS or 🔴 ERROR.

If a build fails, show:
```
File: <path>
Error: <exact error text>
Root Cause: <exact explanation>
Fix Applied: <exact change>
```

---

## 5. End-of-Session Summary (Full Mode)

End every session with this exact block:
```
## Session Summary
### Files Modified
- path/to/file — what changed
### Files Created
- path/to/file — what it does
### Verification
Command: <exact command>
Result: 🟢 SUCCESS / 🔴 ERROR
### Recommended Next Step
One sentence. The single most important next action.
```
