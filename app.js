const scheduleStart = new Date('2026-05-12T00:00:00');
const scheduleEnd = new Date('2026-07-17T00:00:00');
const dayMs = 24 * 60 * 60 * 1000;
const totalDays = Math.round((scheduleEnd - scheduleStart) / dayMs) + 1;

const milestones = [
  ['킥오프', '전체 WBS, 파일명 규칙, 녹화 템플릿, 검수표', '2026-05-12', '2026-05-13', '제작 기준 승인'],
  ['1차 확보', '1~3강 녹화본, 원본/편집본/음성 파일', '2026-05-12', '2026-05-22', '기존 저장소 기반 녹화 완료'],
  ['2차 확보', '4강~P1~8강 녹화본', '2026-05-21', '2026-06-09', '데이터 자동화/P1 구간 완료'],
  ['3차 확보', '9강~P2~12강 녹화본', '2026-06-08', '2026-06-23', '보고서 자동화/P2 구간 완료'],
  ['4차 확보', '13~17강 녹화본', '2026-06-22', '2026-07-08', '심화 실무 유틸리티 구간 완료'],
  ['최종 확보', 'P3, 전체 파일 검수, 납품 패키지', '2026-07-06', '2026-07-17', '전체 녹화본 파일 확보'],
];

const courses = [
  ['1', 'AI 마인드셋 + 엔지니어링 활용 전략', 'lecture01 교안 보강, 리허설, 녹화, 편집', '2026-05-12', '2026-05-15', '기존'],
  ['2', '엔지니어용 AI 인터페이스 구성과 대화법', 'lecture02 프롬프트 사례 검수, 녹화, 편집', '2026-05-15', '2026-05-20', '기존'],
  ['3', '방대한 MES 데이터 병합 및 요약 자동화', 'lecture03 CVD/MES 실습 검수, 녹화, 편집', '2026-05-18', '2026-05-22', '기존'],
  ['4', '데이터 정제 마스터: 설비 데이터 노이즈 제거', '샘플 센서 데이터, 결측/이상치 실습 앱, 녹화', '2026-05-21', '2026-05-26', '강의'],
  ['P1', '자동 데이터 분석기 제작', '과제 안내, 템플릿, 평가 체크리스트, 프로젝트 녹화', '2026-05-25', '2026-05-29', '프로젝트'],
  ['5', '인터랙티브 수율 히트맵 및 웨이퍼 맵 시각화', '히트맵/웨이퍼맵 실습, 화면 녹화', '2026-05-27', '2026-06-01', '강의'],
  ['6', '설비 이상 징후 감지 및 실시간 모니터링', 'OOC, 이동평균, UCL/LCL 대시보드', '2026-05-29', '2026-06-03', '강의'],
  ['7', '공정 간 상관관계 분석 및 산점도 시각화', '공정 변수 상관분석, 산점도, 설명 녹음', '2026-06-02', '2026-06-05', '강의'],
  ['8', '불량 원인 Pareto & 트렌드 자동 분석', '파레토 차트, 트렌드 분석, 편집', '2026-06-04', '2026-06-09', '강의'],
  ['9', '엔지니어용 기술 문서 요약 비서 구축', 'PDF/매뉴얼 요약 시나리오, 데모 녹화', '2026-06-08', '2026-06-11', '강의'],
  ['10', '데이터 기반 주간/월간 보고서 자동 생성', 'Markdown/HTML 리포트 자동화, 녹화', '2026-06-10', '2026-06-15', '강의'],
  ['P2', '실무 자동화 보고서 앱', '보고서 앱 통합, 과제 설명, 프로젝트 녹화', '2026-06-15', '2026-06-19', '프로젝트'],
  ['11', '공정 파라미터 최적화: 골든 레시피 탐색', '골든 레시피 역추적, 조건 비교 대시보드', '2026-06-16', '2026-06-19', '강의'],
  ['12', 'OLED 광학 및 공정 시뮬레이터 제작', '시뮬레이터 화면, 수식 설명 최소화, 녹화', '2026-06-18', '2026-06-23', '강의'],
  ['13', '이미지 기반 불량 크기 자동 측정 실습', '현미경 이미지 측정 데모, 통계 리포트', '2026-06-22', '2026-06-25', '강의'],
  ['14', '자재 소모량 예측 및 스마트 재고 관리 전산', '소모량 예측, 재고 알림 화면, 편집', '2026-06-24', '2026-06-29', '강의'],
  ['15', 'AI 기반 정비 의사결정 및 견적 분석 추천', '견적 비교, 가중치 추천, 의사결정 녹화', '2026-06-26', '2026-07-01', '강의'],
  ['16', '팀 협업용 공정 대시보드 최종 통합 실습', '통합 대시보드, 배포/공유 URL, 검수', '2026-06-30', '2026-07-03', '강의'],
  ['17', '현장 엔지니어 특화 AI 활용 시나리오 피칭', '피칭 스크립트, 발표 녹화, 피드백 포인트', '2026-07-02', '2026-07-08', '강의'],
  ['P3', '최종 실무 과제: 나만의 엔지니어 툴킷', '최종 프로젝트 안내, 통합 검수, 납품 패키지', '2026-07-06', '2026-07-17', '프로젝트'],
];

const weekly = [
  ['W0', '05/12~05/15', '킥오프, 1강 파일 확보, 2강 착수', '1강 MP4/음성/원본 확보'],
  ['W1', '05/18~05/22', '2~3강 확보, 4강 교안 착수', '1~3강 납품 폴더 정리'],
  ['W2', '05/25~05/29', '4강, P1, 5강 제작/녹화', 'P1 프로젝트 설명 영상 확보'],
  ['W3', '06/01~06/05', '5~7강 편집/검수, 8강 착수', '7강까지 최종본 확보'],
  ['W4', '06/08~06/12', '8~10강 제작/녹화', '10강 1차 편집본 확보'],
  ['W5', '06/15~06/19', 'P2, 11강, 12강 녹화', 'P2와 11강 최종본 확보'],
  ['W6', '06/22~06/26', '12~15강 제작/녹화', '13강까지 최종본 확보'],
  ['W7', '06/29~07/03', '14~16강 최종화, 17강 착수', '16강까지 최종본 확보'],
  ['W8', '07/06~07/10', '17강, P3 녹화, 전체 1차 검수', '17강/P3 1차 편집본 확보'],
  ['W9', '07/13~07/17', '전체 재검수, 백업, 최종 납품', '모든 녹화본 파일 확보'],
];

const workflow = [
  ['기획', '강의 목표, 핵심 메시지, 실습 결과물 확정', '2~3시간'],
  ['교안', '강의 흐름, 예시, 스크립트 초안 작성', '3~5시간'],
  ['실습 앱', 'React 화면, 샘플 데이터, 데모 플로우 준비', '4~8시간'],
  ['리허설', '40분 강의 타이밍, 실습 실패 지점 점검', '1시간'],
  ['화면 녹화', '강의 설명, 실습 진행, 결과 화면 캡처', '1~1.5시간'],
  ['음성 녹음', '마이크 레벨, 노이즈 제거, 재녹음 구간 확보', '1시간'],
  ['편집', '컷 편집, 무음 제거, 자막/챕터, 화면 확대', '4~6시간'],
  ['검수', '오탈자, 화면 깨짐, 음량, 파일명, 러닝타임 확인', '1~2시간'],
  ['납품', 'MP4, 원본, 음성, 썸네일, 강의자료 정리', '1시간'],
];

const files = [
  ['최종 영상', 'L01_AI_Mindset_final_20260515.mp4'],
  ['원본 영상', 'L01_screen_recording_raw.mov'],
  ['원본 음성', 'L01_voice_raw.wav'],
  ['편집 프로젝트', 'L01_edit_project.prproj'],
  ['강의자료', 'L01_script.md, L01_assets, L01_sample_data'],
  ['검수표', 'L01_QA_checklist.md'],
];

const risks = [
  ['4강 이후 실습 앱 미완성', '앱 제작과 교안 작성을 하루 이상 겹치지 않게 배치'],
  ['음성 품질 문제', '강의별 15분 재녹음 버퍼 확보'],
  ['실습 중 오류 발생', '녹화 전 리허설에서 데모 데이터 고정'],
  ['프로젝트 P3 범위 과대', 'P3는 평가 기준/템플릿 중심으로 녹화'],
  ['검수 누락', '파일 확보 기준을 강의별 체크리스트로 강제'],
];

function dateOffset(date) {
  return Math.round((new Date(`${date}T00:00:00`) - scheduleStart) / dayMs);
}

function duration(start, end) {
  return Math.round((new Date(`${end}T00:00:00`) - new Date(`${start}T00:00:00`)) / dayMs) + 1;
}

function shortDate(date) {
  const [, month, day] = date.split('-');
  return `${month}/${day}`;
}

document.querySelector('#milestones').innerHTML = milestones.map(([name, output, start, end, status], index) => `
  <article class="milestone-card">
    <div class="milestone-index">${String(index + 1).padStart(2, '0')}</div>
    <h3>${name}</h3>
    <p>${output}</p>
    <div class="date-line"><span>${shortDate(start)}</span><span>${shortDate(end)}</span></div>
    <small>${status}</small>
  </article>
`).join('');

const ticks = ['2026-05-12', '2026-05-19', '2026-05-26', '2026-06-02', '2026-06-09', '2026-06-16', '2026-06-23', '2026-06-30', '2026-07-07', '2026-07-14', '2026-07-17'];
document.querySelector('#timelineHeader').innerHTML = ticks.map((tick) => {
  const left = (dateOffset(tick) / (totalDays - 1)) * 100;
  return `<span style="left:${left}%">${shortDate(tick)}</span>`;
}).join('');

document.querySelector('#ganttRows').innerHTML = courses.map(([id, title, task, start, end, type]) => {
  const left = (dateOffset(start) / totalDays) * 100;
  const width = (duration(start, end) / totalDays) * 100;
  const className = type === '프로젝트' ? 'project' : type === '기존' ? 'ready' : 'lecture';
  return `
    <article class="gantt-row">
      <div class="course-label">
        <strong>${id}</strong>
        <span>${title}</span>
        <small>${task}</small>
      </div>
      <div class="bar-track">
        <div class="gantt-bar ${className}" style="left:${left}%; width:${width}%"><span>${shortDate(start)}-${shortDate(end)}</span></div>
      </div>
    </article>
  `;
}).join('');

document.querySelector('#weeklyPlan').innerHTML = `
  <table>
    <thead><tr><th>주차</th><th>기간</th><th>목표</th><th>완료 기준</th></tr></thead>
    <tbody>${weekly.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
  </table>
`;

document.querySelector('#workBreakdown').innerHTML = workflow.map(([step, body, time]) => `
  <article><strong>${step}</strong><p>${body}</p><span>${time}</span></article>
`).join('');

document.querySelector('#fileStandard').innerHTML = files.map(([label, example]) => `
  <article><span>${label}</span><code>${example}</code></article>
`).join('');

document.querySelector('#risks').innerHTML = risks.map(([risk, response]) => `
  <article><strong>${risk}</strong><p>${response}</p></article>
`).join('');
