import { PageHeader } from "@/components/layout/PageHeader";
import { WithdrawalForm } from "@/components/shop/WithdrawalForm";
import { Container } from "@/components/ui/Container";
import type { ShopEdition } from "@/content/shop";

/** `/shop/withdraw`, in one language. */
export function WithdrawalDocument({
  edition,
  initialReference,
}: {
  readonly edition: ShopEdition;
  readonly initialReference: string;
}) {
  const words = edition.text.withdrawal;
  return (
    <>
      <PageHeader kicker={words.kicker} title={words.title} lede={words.lede} size="narrow" />
      <Container size="narrow" className="py-12">
        <div className="max-w-xl">
          <WithdrawalForm locale={edition.locale} text={edition.text} initialReference={initialReference} />
        </div>
      </Container>
    </>
  );
}
