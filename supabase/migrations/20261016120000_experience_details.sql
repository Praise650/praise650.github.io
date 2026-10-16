-- Richer experience entries: short highlights for the list view, markdown details for the bottom sheet.
ALTER TABLE public.experiences
  ADD COLUMN location TEXT NOT NULL DEFAULT '',
  ADD COLUMN employment_type TEXT NOT NULL DEFAULT '',
  ADD COLUMN highlights TEXT[] NOT NULL DEFAULT '{}',
  ADD COLUMN details TEXT NOT NULL DEFAULT '',
  ADD COLUMN tech TEXT[] NOT NULL DEFAULT '{}';

COMMENT ON COLUMN public.experiences.description IS 'One-line summary (legacy rows may hold highlights + "---" + details as markdown).';
COMMENT ON COLUMN public.experiences.highlights IS '2-3 bullets shown on the Experience list.';
COMMENT ON COLUMN public.experiences.details IS 'Markdown shown in the details bottom sheet.';
