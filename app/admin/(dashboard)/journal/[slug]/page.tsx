import { notFound } from "next/navigation";
import { ArticleEditor } from "@/components/admin/ArticleEditor";
import { loadDraft } from "@/lib/admin/journal";
import { deleteArticleAction, saveArticleAction } from "../actions";

export default async function EditArticlePage(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [{ slug }, searchParams] = await Promise.all([props.params, props.searchParams]);

  const draft = await loadDraft(slug);
  if (!draft) notFound();

  return (
    <ArticleEditor
      draft={draft}
      mode="edit"
      action={saveArticleAction}
      deleteAction={deleteArticleAction}
      saved={searchParams.saved === "1"}
    />
  );
}
