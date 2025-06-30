import { getConstants } from '@/app/layout'
import { Container } from '@/components/common/container.component'
import { Divider } from '@/components/common/divider.component'
import Link from 'next/link'

export async function generateMetadata() {
  return {
    title: 'Gizlilik Politikası',
    description: 'Gizlilik Politikası',
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  }
}

const Page = async () => {
  const { CONTACT_EMAIL, DOMAIN, SITE_NAME } = await getConstants()

  return (
    <Container>
      <div className="mx-auto w-full px-4 py-8 pb-[200px] xl:container xl:px-0">
        <Divider align="left">
          <h1 className="text-lg font-semibold uppercase">Gizlilik Politikası</h1>
        </Divider>
        <div className="prose prose-lg dark:prose-invert [&_h2]:font-display [&_h3]:font-display m-8 space-y-4 [&_h2]:text-lg [&_h2]:font-semibold [&_h3]:font-semibold">
          <p>
            <strong>Son Güncelleme:</strong> 25.04.2025
          </p>

          <p>
            {SITE_NAME} (&quot;biz&quot;, &quot;bizim&quot;, veya &quot;bizim&quot;) olarak gizliliğiniz bizim için önemlidir. Bu Gizlilik Politikası, {DOMAIN} web sitemiz (the &quot;Site&quot;) aracılığıyla toplanan bilgileri nasıl ele aldığımızı açıklar.
          </p>

          <h2>Topladığımız Bilgiler</h2>
          <p>
            Sitemiz kullanıcı hesapları veya giriş işlevselliği sunmadığı için, adınız, e-posta adresiniz veya hesap detaylarınız gibi kişisel bilgileri doğrudan toplamayız.
          </p>
          <p>
            Ancak, Sitemizi ziyaret ettiğinizde otomatik olarak bilgi toplayan üçüncü taraf analitik ve performans izleme hizmetlerini kullanıyoruz. Bu şunları içerir:
          </p>
          <ul>
            <li>
              <strong>Kullanım Verileri:</strong> Sitemizle nasıl etkileşimde bulunduğunuz hakkında bilgiler, ziyaret edilen sayfalar, sayfalarda geçirilen süre, tıklanan bağlantılar ve genel navigasyon kalıpları gibi.
            </li>
            <li>
              <strong>Cihaz ve Tarayıcı Bilgileri:</strong> Siteye erişmek için kullandığınız cihaz ve tarayıcı hakkında veriler, IP adresi (genellikle anonimleştirilmiş veya yaklaşık konum türetmek için kullanılır), cihaz türü, işletim sistemi, tarayıcı türü, ekran çözünürlüğü ve dil tercihleri dahil.
            </li>
            <li>
              <strong>Yönlendirme Bilgileri:</strong> Sizi Sitemize yönlendiren kaynak hakkında bilgiler (örn. bir arama motoru veya başka bir siteden gelen bağlantı).
            </li>
          </ul>
          <p>
            Bu bilgiler, hizmet sağlayıcılarımız tarafından kullanılan teknolojiler aracılığıyla toplanır: Google Analytics, Vercel Analytics ve Hotjar, <Link href="/tr/cookies">Çerez Politikamızda</Link> detaylandırıldığı gibi.
          </p>

          <h2>Bilgilerinizi Nasıl Kullanıyoruz</h2>
          <p>
            Analitik sağlayıcılarımız aracılığıyla toplanan bilgiler yalnızca aşağıdaki amaçlar için kullanılır:
          </p>
          <ul>
            <li>
              Ziyaretçilerin Sitemizi nasıl kullandığını anlamak ve popüler içerik veya iyileştirme alanlarını belirlemek.
            </li>
            <li>Web sitesi trafik kalıplarını ve kaynaklarını analiz etmek.</li>
            <li>
              Web sitesi performansını, hızını ve teknik işlevselliğini izlemek.
            </li>
            <li>
              Site düzenini ve kullanıcı deneyimini iyileştirmek için kullanıcı davranışını (Hotjar aracılığıyla tıklamalar ve kaydırma gibi) toplu olarak analiz etmek.
            </li>
          </ul>
          <p>
            Bu verileri Site&apos;yi geliştirmek için bilinçli kararlar vermek üzere toplu veya anonimleştirilmiş formda analiz ediyoruz.
          </p>

          <h2>İşleme için Yasal Dayanak</h2>
          <p>
            Sitemizde kullanılan üçüncü taraf analitik ve izleme teknolojileri (Google Analytics, Vercel Analytics, Hotjar) aracılığıyla bilgi toplama ve işleme için yasal dayanak olarak çerez onay banner&apos;ımız aracılığıyla elde ettiğimiz **onayınıza** güveniyoruz.
          </p>

          <h2>Bilgi Paylaşımı ve Üçüncü Taraflar</h2>
          <p>
            Kişisel bilgilerinizi üçüncü taraflara satmıyor veya kiralamıyoruz.
          </p>
          <p>
            Ancak, bahsedilen analitik ve site izleme hizmetlerini sağlamak için, toplanan kullanım, cihaz ve tarayıcı bilgilerini üçüncü taraf hizmet sağlayıcılarımızla paylaşıyoruz:
          </p>
          <ul>
            <li>
              <strong>Google (Google Analytics için):</strong> Veriler Google&apos;ın Gizlilik Politikası&apos;na göre işlenir.
            </li>
            <li>
              <strong>Vercel (Vercel Analytics için):</strong> Veriler Vercel&apos;in Gizlilik Politikası&apos;na göre işlenir.
            </li>
            <li>
              <strong>Hotjar:</strong> Veriler Hotjar&apos;ın Gizlilik Politikası&apos;na göre işlenir.
            </li>
          </ul>
          <p>
            Bu sağlayıcılar, talimatlarımıza göre ve kendi gizlilik politikaları ve veri işleme anlaşmalarına göre bizim adımıza veri işler. Politikalarında belirtildiği gibi, bize hizmet sağlamanın ötesinde bilgileri kendi bağımsız amaçları için kullanmaları yasaktır, ancak potansiyel olarak kendi hizmet iyileştirmeleri için toplu/anonimleştirilmiş formlarda kullanabilirler.
          </p>

          <h2>Veri Güvenliği</h2>
          <p>
            Bizim adımıza topladıkları verileri korumak için üçüncü taraf hizmet sağlayıcılarımızın (Google, Vercel, Hotjar) uyguladığı güvenlik önlemlerine güveniyoruz. Çeşitli güvenlik önlemleri kullanırken, lütfen İnternet üzerinden iletişim veya elektronik depolama yönteminin %100 güvenli olmadığını unutmayın.
          </p>

          <h2>Veri Saklama</h2>
          <p>
            Analitik sağlayıcılarımız tarafından toplanan ham kişisel verileri uzun süreler boyunca doğrudan saklamıyoruz. Veriler Google Analytics, Vercel Analytics ve Hotjar tarafından kendi veri saklama politikalarına göre tutulur ve işlenir. Tipik olarak bu verilerden oluşturulan toplu veya anonimleştirilmiş raporlara erişiriz.
          </p>

          <h2>Uluslararası Veri Transferleri</h2>
          <p>
            Google Analytics, Vercel ve Hotjar gibi küresel hizmetleri kullanmak, toplanan bilgilerin ikamet ettiğiniz ülkenin dışına, potansiyel olarak farklı veri koruma yasalarına sahip ülkelere (Amerika Birleşik Devletleri gibi) transfer edilmesini içerir. Bu transferler için yeterli veri koruma seviyesini sağlamak üzere bu hizmet sağlayıcıları tarafından sağlanan Standard Sözleşmeli Maddeler (SCC&apos;ler) veya diğer onaylanmış mekanizmalar gibi güvencelere güveniyoruz.
          </p>

          <h2>Haklarınız</h2>
          <p>
            Konumunuza ve uygulanabilir veri koruma yasalarına (GDPR gibi) bağlı olarak, kişisel bilgilerinizle ilgili belirli haklara sahip olabilirsiniz, örneğin verilerinize erişim, düzeltme, silme veya işlemeye itiraz etme hakkı. Ayrıca analitik izleme için onayınızı herhangi bir zamanda geri çekme hakkına sahipsiniz (örn. onay banner&apos;ımız aracılığıyla çerezleri reddederek veya tarayıcı ayarlarını yöneterek).
          </p>
          <p>
            Sahip olabileceğiniz herhangi bir hakkı kullanmak için veya sorularınız varsa, lütfen aşağıdaki detayları kullanarak bizimle iletişime geçin. Ayrıca, tuttukları verilerle ilgili olarak üçüncü taraf sağlayıcılarla doğrudan iletişime geçmeniz gerekebilir.
          </p>

          <h2>Bu Gizlilik Politikasındaki Değişiklikler</h2>
          <p>
            Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişiklik için bu politikayı periyodik olarak gözden geçirmenizi teşvik ediyoruz. Değişikliklerden sonra Site&apos;yi kullanmaya devam etmeniz, yeni politikayı kabul ettiğiniz anlamına gelir.
          </p>

          <h2>Bizimle İletişime Geçin</h2>
          <p>
            Bu Gizlilik Politikası veya veri uygulamalarımız hakkında herhangi bir sorunuz varsa, lütfen {CONTACT_EMAIL} adresinden bizimle iletişime geçin.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Page
