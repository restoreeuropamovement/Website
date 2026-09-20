import { ArticleEditor } from "@/components/admin/ArticleEditor";
import { emptyDraft } from "@/lib/admin/journal";
import { saveArticleAction } from "../actions";

export default function NewArticlePage() {
  return <ArticleEditor draft={emptyDraft} mode="new" action={saveArticleAction} />;
}
