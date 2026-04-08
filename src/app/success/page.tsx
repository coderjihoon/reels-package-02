export default function SuccessPage() {
  return (
    <main className="min-h-[100dvh] bg-slate-950 px-4 py-24 text-slate-50">
      <div className="mx-auto flex max-w-2xl flex-col items-center rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
        <div className="mb-4 text-5xl">✅</div>
        <h1 className="text-3xl font-bold text-white">결제가 완료되었습니다</h1>
        <p className="mt-4 text-slate-400">
          구매해 주셔서 감사합니다. 결제 정보가 정상적으로 전달되면 다운로드 안내 흐름으로 이어집니다.
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
