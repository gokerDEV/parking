import { getConstants } from '@/app/layout'
import { Container } from '@/components/common/container.component'
import { Divider } from '@/components/common/divider.component'

export async function generateMetadata() {
  return {
    title: 'Çerez Politikası',
    description: 'Çerez Politikası',
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
          <h1 className="text-lg font-semibold uppercase">Çerez Politikası</h1>
        </Divider>
        <div className="prose prose-lg dark:prose-invert [&_h2]:font-display [&_h3]:font-display m-8 space-y-4 [&_h2]:text-lg [&_h2]:font-semibold [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:pl-4">
          <p>
            <strong>Son Güncelleme:</strong> 25.04.2025
          </p>

          <p>
            Bu Çerez Politikası, {SITE_NAME} (&quot;biz&quot;, &quot;bizim&quot;, veya &quot;bizim&quot;) olarak {DOMAIN} web sitemizde (the &quot;Site&quot;) çerezler ve benzer teknolojileri nasıl kullandığımızı açıklar.
          </p>

          <h2>Çerezler ve Benzer Teknolojiler Nelerdir?</h2>
          <p>
            Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza (bilgisayar, tablet, cep telefonu) yerleştirilen küçük metin dosyalarıdır. Piksel, yerel depolama veya oturum depolama gibi benzer teknolojiler de karşılaştırılabilir işlevler gerçekleştirir. Web sitelerinin cihazınızı tanımasına ve ziyaretiniz, tercihleriniz veya eylemleriniz hakkında bilgileri zaman içinde hatırlamasına yardımcı olurlar.
          </p>

          <h2>Çerezleri ve Benzer Teknolojileri Nasıl Kullanıyoruz</h2>
          <p>
            Sitemiz kullanıcı girişleri gerektirmediği veya temel web protokollerinin ötesinde temel oturum yönetimi gerektiren karmaşık özelliklere sahip olmadığı için, öncelikle analitik ve web sitesi iyileştirme amaçları için üçüncü taraf hizmetler tarafından sağlanan çerezler ve benzer teknolojileri kullanıyoruz. Özellikle şunları kullanıyoruz:
          </p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> Ziyaretçilerin Sitemizi nasıl kullandığı hakkında anonimleştirilmiş bilgiler toplamak için Google Analytics kullanıyoruz. Bu, ziyaretçi sayısı, ziyaret ettikleri sayfalar, sitede geçirilen süre, yaklaşık coğrafi konum ve kullanılan cihaz ve tarayıcı türü gibi verileri içerir. Bu, trafik kalıplarını anlamamıza ve Sitenin içeriğini ve yapısını iyileştirmemize yardımcı olur. Google, bu bilgileri nasıl kullandığı konusunda kendi gizlilik politikasına sahiptir.
            </li>
            <li>
              <strong>Vercel Analytics:</strong> Hosting sağlayıcımız olarak Vercel, web sitesi performansını ve ziyaretçi istatistiklerini ölçmek için anonim analitik veriler toplayabilir. Bu, site hızını ve genel kullanım kalıplarını anlamamıza yardımcı olur. Vercel&apos;in veri toplama işlemi kendi gizlilik politikasına tabidir.
            </li>
            <li>
              <strong>Hotjar:</strong> Kullanıcılarımızın ihtiyaçlarını daha iyi anlamak ve bu hizmeti ve deneyimi optimize etmek için Hotjar kullanıyoruz. Hotjar, kullanıcılarımızın deneyimini anlamamıza yardımcı olan bir teknoloji hizmetidir (örn. hangi sayfalarda ne kadar zaman geçirdikleri, hangi bağlantıları tıklamayı seçtikleri, kullanıcıların neyi sevip sevmedikleri vb.), kullanıcı geri bildirimi ile hizmetimizi oluşturmamızı ve sürdürmemizi sağlar. Hotjar, kullanıcılarımızın davranışları ve cihazları hakkında veri toplamak için çerezler ve diğer teknolojileri kullanır (cihazın IP adresi [yalnızca anonimleştirilmiş formda yakalanır ve saklanır], cihaz ekran boyutu, cihaz türü [benzersiz cihaz tanımlayıcıları], tarayıcı bilgileri, coğrafi konum [yalnızca ülke] ve web sitemizi görüntülemek için kullanılan tercih edilen dil dahil). Hotjar bu bilgileri bizim adımıza psödonimleştirilmiş bir kullanıcı profili olarak saklar. Hotjar, bizim adımıza toplanan verilerden herhangi birini satmaya sözleşmeli olarak yasaktır. Daha fazla ayrıntı için lütfen{' '}
              <a
                href="https://help.hotjar.com/hc/en-us/categories/115001323967-About-Hotjar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hotjar&apos;ın destek sitesindeki
              </a>{' '}
              &quot;Hotjar hakkında&quot; bölümüne bakın.
            </li>
          </ul>
          <p>
            Bu araçlar, toplu kullanım kalıplarını analiz etmemize ve Site&apos;ye iyileştirmeler yapmamıza yardımcı olur.
          </p>

          <h2>Çerezlerle İlgili Seçimleriniz</h2>
          <p>
            Sitemizi ilk ziyaret ettiğinizde, yukarıda açıklanan analitik teknolojileri kullanma izninizi isteyen bir onay banner&apos;ı ile karşılaşacaksınız. Kullanımlarını kabul edebilir veya reddedebilirsiniz.
          </p>
          <ul>
            <li>
              <strong>Kabul Et:</strong> Kabul ederseniz, Google Analytics, Vercel Analytics ve Hotjar&apos;dan gelen analitik scriptleri yüklenecek ve oturumunuz sırasında veri toplamaya başlayacaktır.
            </li>
            <li>
              <strong>Reddet:</strong> Reddederseniz, bu temel olmayan analitik scriptleri yüklenmeyecek ve ilgili veri toplama işlemi ziyaretiniz sırasında gerçekleşmeyecektir.
            </li>
          </ul>
          <p>
            Çerez tercihlerinizi genellikle web tarayıcınızın ayarları aracılığıyla da yönetebilirsiniz. Çoğu tarayıcı çerezleri engellemenize veya silmenize izin verir. Ancak, tüm çerezleri engellemek web sitesi işlevselliğini etkileyebilir, ancak sitemizin doğası göz önüne alındığında bu daha az olasıdır.
          </p>
          {/* İsteğe bağlı: Eğer bir onay yöneticisi uygularsanız, buraya bir bağlantı/düğme ekleyin */}
          {/* <p>Onay tercihlerinizi [Çerez Ayarları Sayfası](link) ziyaret ederek istediğiniz zaman değiştirebilirsiniz.</p> */}

          <h2>Bu Çerez Politikasındaki Değişiklikler</h2>
          <p>
            Bu Çerez Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişiklik için bu politikayı periyodik olarak gözden geçirmenizi teşvik ediyoruz. Değişikliklerden sonra Site&apos;yi kullanmaya devam etmeniz, yeni politikayı kabul ettiğiniz anlamına gelir.
          </p>

          <h2>Bizimle İletişime Geçin</h2>
          <p>
            Çerezlerin kullanımımız hakkında herhangi bir sorunuz varsa, lütfen {CONTACT_EMAIL} adresinden bizimle iletişime geçin.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Page

