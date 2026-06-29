---
name: agent-customization
user-invocable: false
description: '**WORKFLOW SKILL** — Create, update, review, or fix VS Code agent customization files for this repository. Useful for `.instructions.md`, `.prompt.md`, `.agent.md`, `SKILL.md`, `copilot-instructions.md`, and `AGENTS.md` files.'
---

# Agent Customization

This skill guides you through creating and maintaining workspace-scoped agent customization files in this repository.

## When to Use

- You need a project-specific customization for VS Code Copilot or custom agents.
- You want to save preferences, workflows, or guardrails in a file that stays with the repository.
- You are adding or fixing `SKILL.md`, `*.instructions.md`, `*.prompt.md`, `*.agent.md`, `copilot-instructions.md`, or `AGENTS.md`.

## Workflow

1. Determine scope
   - Workspace-scoped files belong in `.github/` or another repository folder.
   - Keep user-specific customizations in the user prompts folder, not in this repo.

2. Choose the right primitive
   - `copilot-instructions.md` / `AGENTS.md` for always-on workspace behavior.
   - `*.instructions.md` for file-specific guidance via `applyTo`.
   - `*.prompt.md` for a focused single-task prompt.
   - `*.agent.md` for a custom agent with tool or context restrictions.
   - `SKILL.md` for a reusable workflow with multiple steps.

3. Create the file
   - Add YAML frontmatter with `name`, `description`, and any required metadata.
   - Use a descriptive `description` to make the skill discoverable.
   - Keep the body concise, with a clear step-by-step process.

4. Validate
   - Confirm the file path is correct for the chosen primitive.
   - Verify the YAML frontmatter is valid.
   - Make sure the `description` includes keywords the agent can match.

## Quality Checklist

- [ ] File is in the repository-scoped customization location (e.g. `.github/skills/<name>/SKILL.md`).
- [ ] YAML frontmatter is present and properly formatted.
- [ ] `description` clearly states the skill purpose.
- [ ] Workflow steps are explicit and actionable.
- [ ] No tabs in YAML (spaces only).

## Notes

- Use `applyTo` globs carefully: avoid `applyTo: "**"` unless the guidance truly applies to every file.
- Prefer specific descriptions over generic ones so the agent can load the skill only when relevant.
- If your workflow needs isolated stages or tool restrictions, consider a custom agent (`*.agent.md`) instead.
