import PageWrapper from "@workspace/common/components/page-wrapper";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageWrapper>{children}</PageWrapper>;
}
