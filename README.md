# Tropical Consulting Ltd — Website

A fresh Next.js 15 + TypeScript starter for the TCL public website and a protected photo-management portal. Visual direction: **GLOBAL — Blue & White**.

## What is included
- Responsive public pages: Home, About, What We Do, Life at TCL, Gallery, Careers and Contact.
- Gallery reads only approved event photos from Supabase.
- Protected admin area for event creation, photo uploads, approval and deletion.
- Supabase Auth + Row Level Security + private upload bucket.
- Ready for GitHub and Vercel deployment.

## 1. Requirements
- Node.js 20.9+
- A Supabase project
- GitHub repository and Vercel account

## 2. Install
```bash
npm install
cp .env.example .env.local
```
Fill `.env.local` with your Supabase Project URL and anon/public key (Project Settings → API).

## 3. Configure Supabase
1. Open Supabase SQL Editor.
2. Run `supabase/schema.sql`.
3. In Supabase Authentication, create the first user for the person who will manage the gallery.
4. In SQL Editor, promote that user to admin:
```sql
update public.profiles set role = 'admin' where id = 'AUTH_USER_UUID';
```
5. In Storage, the SQL creates a private bucket named `tcl-gallery`. The app uploads files to this bucket and displays approved photos using signed URLs.

**Important:** Never put a Supabase service-role key in a `NEXT_PUBLIC_` variable or browser code. This project uses the anon key and database/storage policies.

## 4. Run locally
```bash
npm run dev
```
Open http://localhost:3000.

## 5. Deploy
1. Push this folder to a new GitHub repository.
2. Import the repository into Vercel.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Vercel Environment Variables (Production, Preview and Development).
4. Deploy.

## 6. Make a user an admin
Create the account in Supabase Auth, then run:
```sql
insert into public.profiles (id, full_name, role)
values ('AUTH_USER_UUID', 'Gallery Administrator', 'admin')
on conflict (id) do update set role = 'admin';
```
The admin portal is at `/admin`. Sign in at `/admin/login`.

## 7. Content to customize before launch
Search the project for `TODO: TCL CONTENT`. Confirm the group's official name, official group website, office address, contact email/phone, actual service scope, career application destination and approved brand assets. The site intentionally does not name an industry.

## Security / operational notes
- Public visitors can read only photos marked `approved`.
- Authenticated users can upload photos; admins can approve or reject and delete.
- Admin status is stored in `profiles.role`, protected by RLS.
- Uploads are capped at 8 MB and image MIME types only in the UI. Adjust the Storage bucket limit if required.
- Obtain consent/permission before publishing identifiable employee photos. Establish an internal retention and moderation policy.
- Contact form currently uses `mailto:` as a safe starter; connect a trusted form/email provider before production if you need server-side submissions.
