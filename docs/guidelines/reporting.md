# ZenixUI — Reporting Guidelines
# Extracted from AGENTS.md

## Reporting: Mandatory Format for Every Modified File

You are not allowed to say "Edited file", "Implemented feature", "Added support", "Integrated analytics",
or "Build passed" without showing proof.

For EVERY modified file, use this exact structure:

```
File:
<absolute path>

Purpose:
Why this file changed. One paragraph.

Updated Code:
Show ONLY the modified section as it exists in the final file.
Do NOT show git diffs.
Do NOT show before/after.
Do NOT show removed code.
Show the final state of the changed code block.
If the file is large, show only the relevant modified section — never omit it entirely.

Architecture Review:
- Why this implementation was chosen
- Alternatives considered
- Tradeoffs
- Future implications
```

For files containing customer-visible copy (homepage, OG metadata, studio headers, gallery headings):

```
Conversion Hypothesis:
- What behavior change this copy is expected to produce
- Why this framing was chosen over alternatives
- What metric would confirm or refute the hypothesis
```

---

## Verification: Mandatory After Every Session

Always run the build and show the COMPLETE output — never truncated.

```
Command Run:
pnpm --filter website build

Terminal Output:
<exact text — never summarized, never truncated>
```

Always label terminal output:

🟢 SUCCESS TERMINAL OUTPUT

or

🔴 ERROR TERMINAL OUTPUT

Never mix them. Never replace output with "build passed" or "compiled successfully".

---

## Error Reporting Format

If a build fails, show:

```
File: <path>
Line: <number>
Column: <number>
Error: <exact TypeScript / Next.js / Runtime error text>

Root Cause: <exact explanation>
Fix Applied: <exact change>
Terminal Output After Fix: <full output>
```

---

## End-of-Session Summary (Mandatory)

End every session with this exact block:

```
## Session Summary

### Files Modified
- path/to/file — what changed

### Files Created
- path/to/file — what it does

### Files Deleted
- (none) or list

### Verification
Command: <exact command>
Result: 🟢 SUCCESS / 🔴 ERROR
Pages generated: N
TypeScript errors: 0

### Remaining Technical Debt
- List of known issues not fixed this session

### Recommended Next Step
One sentence. The single most important next action.
```

Never omit this block. Never summarize it as "session complete."

---

## Mandatory Response Format (Before AND After Code Changes)

### Before modifying ANY file:
1. Audit the affected files (show paths inspected)
2. Explain why the change improves: UX, DX, SEO, conversion, accessibility, or scalability
3. Explain alternatives and why they were rejected

### After modifying ANY file, ALWAYS include:

**Modified Files:**
- Full relative path
- One paragraph: why this file changed

**Updated Code:**
- Show the actual modified code or the relevant changed section
- Never omit code with "edited" or "updated" summaries
- Never show diffs — show final state only

**Terminal Output — label with exactly one of:**

🟢 SUCCESS
```
<exact terminal output>
```

🔴 ERROR
```
<exact terminal output>
```

🟡 WARNING
```
<exact terminal output>
```

**If a build fails:**
- Explain the exact root cause
- Show the fix applied
- Re-run the build
- Include the successful terminal output in full

**Never:**
- Stop after presenting only an implementation plan when implementation was requested
- Fabricate build results or terminal logs
- Truncate terminal output
- Use "build passed" or "compiled successfully" without showing the actual output

---

## 1. Complete Code Output (Required)

For EVERY modified or newly created file:

* Show the COMPLETE file contents.
* Never show only snippets or diffs.
* Never omit files that were modified.
* Never summarize code changes.

If a file is too large to fit in one response:

* Create a file named `updated.md` in the artifacts directory.
* Include the complete contents of every modified or newly created file inside `updated.md`.

Do NOT omit any file.

---

## 2. Every Modified File Must Be Listed

After implementation include exactly:

```
Modified Files

1.
path/to/file.tsx
Reason:
...

2.
path/to/file.ts
Reason:
...

Created Files

Deleted Files
```

No file may be skipped.

---

## 3. Terminal Output

Always include ALL terminal commands executed.

Separate them into:

🟢 Successful Commands
```
pnpm install
pnpm build
...
```

🟡 Warnings
```
...
```

🔴 Failed Commands
```
...
```

If a command failed:
- explain why
- show the fix
- rerun it

---

## 4. Build Verification

Always include:

```
Framework:
Next.js version

Pages generated:

TypeScript errors:

ESLint errors:

Warnings:

Build duration:

Bundle size (if available):

JS changes:

CSS changes:
```

Never simply say
"Build succeeded."

---

## 5. Evidence Rule

Never say
"Implemented"
unless all of the following exist:
✓ Code
✓ Build
✓ Verification
✓ Reachable UI
✓ No TypeScript errors

---

## 6. No Placeholder Implementations

Never generate placeholder code.
Never fake an implementation.
Never create TODO implementations merely to satisfy a checklist.

If something cannot be completed:
Stop.
Explain why.
Provide the exact blocking issue.

---

## 7. Focus

Do not spend responses rewriting implementation plans.
Spend responses writing production-quality code.

The priority is:
1. Implementation
2. Bug fixes
3. UI polish
4. Documentation

Not architecture.

---

## 8. Response Format

Every implementation response must follow this order:

1. What is being implemented
2. Dependency impact analysis
3. Complete code for EVERY modified file (or `updated.md` if too large)
4. Complete code for EVERY newly created file
5. Terminal commands
6. Terminal output
7. Build verification
8. Manual verification
9. Remaining technical debt
10. Next recommended task

---

## 9. Complete File Accountability (Mandatory)

For every implementation response:

### Modified Files
List **every** modified file.
For **every file**, include one of the following:
1. The complete file contents inline.
OR
2. The complete file inside `updated.md`.

There must never be a modified file whose contents are omitted.

### Created Files
Apply the same rule.
Every created file must appear in full.

### Deleted Files
List every deleted file and explain why it was removed.

### Large Responses
If the response exceeds the model's output limit:
* Create `updated.md`.
* Include **all modified files**.
* Include **all created files**.
* Include **all deleted file names**.
* Continue writing into `updated.md` until every file has been included.

Never omit a file because of response length.

### No Partial Code
Never output:
* "..."
* "remaining code unchanged"
* "rest of file omitted"
* partial snippets

Every file must be complete.
If the response limit prevents this:
Use `updated.md`.

---

## 10. High-Volume Modification Rule

If more than 5 files are modified in a session:
Automatically create `updated.md` in the artifacts directory instead of trying to inline code.
Do not ask for permission.
Do it automatically.

---

## 11. API Change Justification (Mandatory)

Before changing any public component API:

1. List every existing usage.
2. State whether the API is:
   - Backward compatible
   - Soft deprecated
   - Breaking
3. If breaking:
   a. Explain why.
   b. Provide migration strategy.
   c. Update every usage.
   d. Verify zero regressions.
