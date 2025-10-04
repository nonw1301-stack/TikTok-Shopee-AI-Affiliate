import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      fontFamily: 'Segoe UI, Arial',
      background: 'linear-gradient(135deg,#f97316 0%,#fff7ed 100%)',
      minHeight: '100vh',
      padding: 0,
    }}>
      <header style={{textAlign:'center',padding:'48px 0 24px'}}>
        <img src="/logo.png" alt="Logo" style={{width:90,height:90,borderRadius:'50%',boxShadow:'0 2px 12px #f9731633',marginBottom:16}} />
        <h1 style={{color:'#f97316',fontSize:40,marginBottom:8,letterSpacing:1}}>autobizaiapp.com</h1>
        <h2 style={{color:'#fb923c',fontSize:28,marginBottom:8}}>TikTok Shopee AI Affiliate</h2>
        <p style={{color:'#444',fontSize:20}}>ระบบอัตโนมัติสำหรับสร้างและโพสต์คอนเทนต์ Shopee ไปยัง TikTok ด้วย AI</p>
      </header>
      <nav style={{display:'flex',justifyContent:'center',gap:16,margin:'32px 0'}}>
        <Link href="/dashboard"><button style={{background:'#f97316',color:'#fff',padding:'12px 24px',border:'none',borderRadius:8,boxShadow:'0 2px 8px #f9731633'}}>Dashboard</button></Link>
        <Link href="/about"><button style={{background:'#fb923c',color:'#fff',padding:'12px 24px',border:'none',borderRadius:8}}>เกี่ยวกับเรา</button></Link>
        <Link href="/connect"><button style={{background:'#f59e42',color:'#fff',padding:'12px 24px',border:'none',borderRadius:8}}>เชื่อมบัญชี TikTok/Shopee</button></Link>
        <Link href="/products"><button style={{background:'#fdba74',color:'#fff',padding:'12px 24px',border:'none',borderRadius:8}}>สินค้า/โพสต์</button></Link>
        <Link href="/notifications"><button style={{background:'#f87171',color:'#fff',padding:'12px 24px',border:'none',borderRadius:8}}>แจ้งเตือน/Monitoring</button></Link>
      </nav>
      <section style={{maxWidth:700,margin:'auto',background:'#fff',borderRadius:20,boxShadow:'0 2px 16px #f9731622',padding:36,marginBottom:32}}>
        <h2 style={{color:'#f97316'}}>ข้อมูลสรุประบบ</h2>
        <ul style={{fontSize:19,lineHeight:2}}>
          <li>บัญชี TikTok เชื่อมต่อแล้ว: <span style={{color:'#10b981'}}>2</span></li>
          <li>สินค้า Shopee ที่เชื่อมต่อ: <span style={{color:'#fb923c'}}>15</span></li>
          <li>AI สร้างคอนเทนต์ล่าสุด: <span style={{color:'#f59e42'}}>3 ชั่วโมงที่แล้ว</span></li>
          <li>แจ้งเตือนล่าสุด: <span style={{color:'#f87171'}}>ไม่มี error</span></li>
        </ul>
      </section>
      <section style={{maxWidth:700,margin:'auto',background:'#fff7ed',borderRadius:20,padding:36,marginBottom:32,boxShadow:'0 2px 8px #f9731611'}}>
        <h2 style={{color:'#fb923c'}}>ข่าวสาร & ฟีเจอร์เด่น</h2>
        <ul style={{fontSize:18,lineHeight:2}}>
          <li>✨ เพิ่มระบบแจ้งเตือนผ่าน Slack</li>
          <li>🚀 รองรับ Backblaze B2 สำหรับเก็บไฟล์วิดีโอ</li>
          <li>🤖 AI สร้างสคริปต์และวิดีโออัตโนมัติ</li>
          <li>🔗 เชื่อมต่อ Shopee และ TikTok API ได้ง่าย</li>
        </ul>
      </section>
  <footer style={{textAlign:'center',marginTop:40,fontSize:15,color:'#fb923c'}}>© 2025 autobizaiapp.com</footer>
    </div>
  );
}
