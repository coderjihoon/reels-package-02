export default function FailPage() {
  return (
    <main className="min-h-[100dvh] bg-slate-950 px-4 py-24 text-slate-50">
      <div className="mx-auto flex max-w-2xl flex-col items-center rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
        <div className="mb-4 text-5xl">⚠️</div>
        <h1 className="text-3xl font-bold text-white">결제에 실패했습니다</h1>
        <p className="mt-4 text-slate-400">
          결제 정보를 다시 확인한 뒤 재시도해 주세요. 오류가 계속되면 다른 결제 수단을 이용해 보세요.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500"
        >
          메인으로 돌아가기
        </a>
      </div>
    </main>
  );
}
