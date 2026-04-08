"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-[100dvh] bg-slate-950 text-slate-50 relative overflow-hidden font-sans">
      {/* Background ambient glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation (Floating Glass Pill) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4 sm:px-0">
        <div className="flex items-center justify-between px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
          <img src="/Frame 29.png" alt="PLR Vault" className="h-8 w-auto" />
          <Button
            className="rounded-full bg-blue-600 hover:bg-blue-700 text-white hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            구매하기
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[90dvh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col items-start gap-8 z-10">
            <Badge variant="outline" className="px-4 py-1.5 border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium rounded-full">
              <span className="mr-2">✨</span> 100% 저작권 프리 PLR/MRR 라이선스
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.15] tracking-tight break-keep text-white">
              얼굴 노출 없이, 저작권 걱정 없이.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">하루 10분으로 끝내는</span><br />
              숏폼 수익화
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-[65ch] break-keep">
              5,000개 이상의 고퀄리티 영상을 내 것처럼 사용하고, 패키지 자체를 재판매하여 100% 마진을 남기세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-lg rounded-2xl bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                [기간 한정] 특가로 구매하기
                {mounted && <Icon icon="solar:arrow-right-linear" className="ml-2 text-xl" />}
              </Button>
            </div>
            <div className="flex items-center gap-3 mt-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=plruser${i}`} alt="user" className="w-8 h-8 rounded-full border-2 border-slate-950" />
                ))}
              </div>
              <p>이미 1,200명 이상의 크리에이터가 수익화 중</p>
            </div>
          </div>
          
          {/* Hero Visual (Asymmetric right) */}
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay z-10" />
            <img 
              src="https://picsum.photos/seed/plrhero/800/1000" 
              alt="5000+ 영상 패키지 미리보기" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-950/80 backdrop-blur-md rounded-xl border border-white/10 z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  {mounted && <Icon icon="solar:folder-with-files-bold-duotone" className="text-2xl text-blue-400" />}
                </div>
                <div>
                  <div className="text-sm text-slate-400">Total Assets</div>
                  <div className="text-2xl font-bold text-white">5,000+ Video Clips</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section (Asymmetric whitespace) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight break-keep mb-6">
              아직도 15초 영상 하나 만들려고 <span className="text-slate-500">3시간씩 검색하시나요?</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6">
            {[
              { title: "영상 제작에 너무 많은 시간 소요", desc: "기획, 촬영, 편집... 매일 콘텐츠 하나 올리기도 벅찹니다." },
              { title: "끈임없는 저작권 위반 우려", desc: "무료 소스를 썼다가 채널에 경고가 누적되어 수익 창출이 막힐까 불안합니다." },
              { title: "얼굴 노출 없는 수익화의 한계", desc: "얼굴 없이 정보성 영상을 만들려니 고퀄리티 자료를 찾기가 너무 어렵습니다." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-6 items-start hover:bg-white/[0.04] transition-colors">
                <div className="w-10 h-10 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center mt-1">
                  {mounted && <Icon icon="solar:close-circle-bold-duotone" className="text-xl text-red-400" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed break-keep">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution & Concept (Bento Grid) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Badge className="mb-4 bg-indigo-500/10 text-indigo-300 border-indigo-500/30 rounded-full px-4 py-1.5">
            패러다임의 전환
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight break-keep mb-6">
            영상을 올리는 것만으로 끝이 아닙니다.<br />
            이제 <span className="text-blue-400">'판매자'</span>가 되세요.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-950 border-white/10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8">
                {mounted && <Icon icon="solar:upload-track-bold-duotone" className="text-3xl text-blue-400" />}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">PLR (Private Label Rights)</h3>
              <p className="text-slate-400 text-lg leading-relaxed break-keep max-w-md">
                5,000개의 고퀄리티 영상을 내 마음대로 편집하고 유튜브, 틱톡, 릴스 등 내 채널에 자유롭게 업로드할 권리입니다. 저작권 걱정 없이 조회수 수익을 창출하세요.
              </p>
            </div>
          </Card>
          <Card className="p-8 md:p-12 rounded-[2rem] bg-slate-900 border-white/10">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-8">
              {mounted && <Icon icon="solar:wallet-money-bold-duotone" className="text-3xl text-indigo-400" />}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">MRR (Master Resell Rights)</h3>
            <p className="text-slate-400 leading-relaxed break-keep">
              패키지 자체를 다른 사람에게 다시 판매할 권리입니다. 직접 가격을 책정하고 판매 수익의 100%를 내 마진으로 가져가세요.
            </p>
          </Card>
        </div>
      </section>

      {/* Features - Zig Zag */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col gap-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-[2rem] overflow-hidden aspect-video border border-white/10">
              <img src="https://picsum.photos/seed/nature/800/600" alt="자연 영상" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  {mounted && <Icon icon="solar:play-bold" className="text-2xl text-white ml-1" />}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 md:pl-12">
              <h3 className="text-3xl font-bold mb-6 leading-tight break-keep">13개 이상의 카테고리,<br />압도적인 스케일</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 break-keep">
                자연, 비즈니스, 동기부여, 럭셔리 라이프스타일 등 조회수가 터지는 13가지 핵심 카테고리의 4K/HD 세로형 영상이 포함되어 있습니다.
              </p>
              <ul className="space-y-4">
                {["자연 풍경 (1,200+)", "럭셔리 자동차/저택 (800+)", "비즈니스 및 동기부여 (1,500+)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    {mounted && <Icon icon="solar:check-circle-bold" className="text-blue-500" />}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:pr-12">
              <h3 className="text-3xl font-bold mb-6 leading-tight break-keep">단순 구매를 넘어,<br />확실한 수익화까지</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 break-keep">
                영상을 어떻게 편집하고 어디에 올려야 할지 막막하신가요? 구매자 한정으로 제공되는 1:1 수익화 가이드를 통해 채널 성장의 지름길을 알려드립니다.
              </p>
              <Button variant="outline" className="rounded-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-6">
                1:1 상담 혜택 안내 보기
              </Button>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden aspect-video border border-white/10 bg-slate-900">
              <img
                src="https://picsum.photos/seed/revenue-guide/1200/675"
                alt="수익화 가이드 이미지"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md border border-white/10">
                  {mounted && <Icon icon="solar:graph-up-bold-duotone" className="text-blue-300" />}
                  수익화 가이드 포함
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white/[0.02] rounded-[3rem] border border-white/5 my-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight break-keep mb-6">수익 자동화 파이프라인 구축 3단계</h2>
          <p className="text-slate-400 text-lg">오늘 당장 시작할 수 있는 가장 현실적인 방법입니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "다운로드", desc: "결제 즉시 구글 드라이브 링크를 통해 5,000개의 영상 원본에 접근합니다.", icon: "solar:cloud-download-bold-duotone" },
            { step: "02", title: "콘텐츠 업로드", desc: "제공된 가이드에 따라 쇼츠/릴스에 업로드하여 채널 트래픽과 조회수 수익을 확보합니다.", icon: "solar:video-library-bold-duotone" },
            { step: "03", title: "재판매 셋업", desc: "가이드를 따라 나만의 판매 페이지를 세팅하고, 패키지를 재판매하여 추가 수익을 창출합니다.", icon: "solar:shop-bold-duotone" }
          ].map((item, idx) => (
            <div key={idx} className="relative p-8 rounded-3xl bg-slate-950 border border-white/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-black text-white/5 absolute top-6 right-6">{item.step}</div>
              <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-8 border border-white/5">
                {mounted && <Icon icon={item.icon} className="text-3xl text-slate-300" />}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed break-keep">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">자주 묻는 질문</h2>
        <Accordion className="w-full space-y-4">
          {[
            { q: "정말 재판매(MRR)를 해도 법적 문제가 없나요?", a: "네, 100% 합법적입니다. 이 패키지는 Master Resell Rights 라이선스를 포함하고 있어, 구매자가 다른 사람에게 재판매하여 100%의 마진을 가져갈 수 있는 권리가 명시되어 있습니다." },
            { q: "유튜브 쇼츠 수익 창출 조건에 부합하나요?", a: "제공되는 영상은 모두 고화질의 원본 소스입니다. 다만 유튜브의 중복 콘텐츠 정책을 피하기 위해 제공되는 무료 배경음악이나 텍스트를 추가하는 간단한 편집 가이드를 따르시면 안전하게 수익 창출 승인을 받을 수 있습니다." },
            { q: "영상 편집을 아예 할 줄 모르는 초보자도 가능한가요?", a: "물론입니다. 캡컷(CapCut) 등 무료 앱을 이용해 텍스트와 음악만 입히는 5분 완성 가이드를 함께 제공해 드립니다. 전문적인 툴 없이 스마트폰만으로도 충분합니다." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 bg-white/[0.02] px-6 rounded-2xl">
              <AccordionTrigger className="text-lg font-bold hover:no-underline text-left py-6">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-slate-400 text-base leading-relaxed pb-6 break-keep">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA (Full Bleed) */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col items-center justify-center text-center border-t border-white/10 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/50 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-bold mb-8">
            {mounted && <Icon icon="solar:clock-circle-bold" />}
            ⏳ 한정 할인 종료 임박
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight break-keep mb-8 text-white">
            지금 바로 당신만의 자동화<br />수익 파이프라인을 구축하세요.
          </h2>
          <div className="flex flex-col items-center justify-center mb-10 space-y-2">
            <div className="text-slate-400 line-through text-xl">정가 250,000원</div>
            <div className="text-5xl font-black text-white">49,000<span className="text-2xl font-bold text-slate-400 ml-1">원</span></div>
            <p className="text-blue-400 font-bold mt-4">✨ 기존 구매자 전용 특별 추가 할인 금액 확인하기</p>
          </div>
          <Button
            size="lg"
            className="px-10 py-8 text-xl rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_50px_-10px_rgba(37,99,235,0.6)] hover:scale-[1.05] active:scale-[0.95] transition-all w-full sm:w-auto"
          >
            지금 바로 영상 패키지 다운로드하기
          </Button>
          <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
            {mounted && <Icon icon="solar:shield-check-bold" />} 결제 즉시 구글 드라이브 권한이 자동 부여됩니다.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 text-center text-slate-500 text-sm bg-slate-950">
        <p>© 2024 PLR Vault. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-slate-300 transition-colors">이용약관</a>
          <a href="#" className="hover:text-slate-300 transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-slate-300 transition-colors">환불규정</a>
        </div>
      </footer>

      <button
        type="button"
        aria-label="채팅 시작하기"
        className="fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#007bff] text-2xl text-white shadow-lg shadow-blue-500/30 transition-all duration-300 ease-out hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <span aria-hidden="true">💬</span>
      </button>
    </main>
  );
}
