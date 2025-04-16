import Link from 'next/link'; // Importieren, falls noch nicht geschehen

export default function Impressum() {
  // HIER PRÜFEN: Sind Sie umsatzsteuerpflichtig? Wenn ja, USt-IdNr. eintragen.
  const ustIdNr = null; // Beispiel: 'DE123456789' oder null, wenn nicht vorhanden/zutreffend
  // HIER PRÜFEN: Haben Sie eine Wirtschafts-ID? Wenn ja, eintragen.
  const wirtschaftsIdNr = null; // Beispiel: 'DE123456789' oder null, wenn nicht vorhanden/zutreffend

  return (
    <div className="prose prose-zinc mx-auto max-w-2xl dark:prose-invert">
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Lion Knoche<br />
        Eschenweg 41<br />
        40699 Erkrath<br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 152 5277 1470<br />
        E-Mail: lion.knoche@hotmail.de {/* Korrigierter Tippfehler */}
      </p>

      {/* Nur angeben, falls Sie umsatzsteuerpflichtig sind */}
      {ustIdNr && (
        <>
          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            {ustIdNr}
          </p>
        </>
      )}

      {/* Nur angeben, falls eine Wirtschafts-ID vorhanden ist */}
      {wirtschaftsIdNr && (
        <>
           <h2>Wirtschafts-ID</h2>
           <p>
              Wirtschafts-Identifikationsnummer gemäß § 139c Abgabenordnung:<br />
              {wirtschaftsIdNr}
           </p>
        </>
      )}


      {/* Prüfen Sie, ob Sie journalistisch-redaktionelle Inhalte anbieten. Wenn ja, ist dieser Abschnitt nötig. */}
      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        Lion Knoche<br />
        Eschenweg 41<br />
        40699 Erkrath<br />
        Deutschland
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a><br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
      </p>

      <h2>Haftungsausschluss (Disclaimer)</h2>
      <h3>Haftung für Inhalte</h3>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h3>Haftung für Links</h3>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h3>Urheberrecht</h3>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>

      {/* Der folgende Abschnitt wurde entfernt, da Datenschutzinformationen in die Datenschutzerklärung gehören. 
          Stattdessen sollte ein Link zur Datenschutzerklärung vorhanden sein (z.B. im Footer der Seite).
      
      <h3>Datenschutz</h3>
      <p>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
      </p> 
      */}

      <h2>Verweis zur Datenschutzerklärung</h2>
      <p>
        Ausführliche Informationen zum Thema Datenschutz entnehmen Sie bitte unserer <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>


    </div>
  )
}