import Link from 'next/link'; // Beispiel, falls Links verwendet werden

export default function Datenschutz() {
  // Zuständige Aufsichtsbehörde (Beispiel für NRW, bitte anpassen falls nötig)
  const aufsichtsbehoerdeName = 'Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen';
  const aufsichtsbehoerdeUrl = 'https://www.ldi.nrw.de/kontakt/beschwerde';

  return (
    <div className="prose prose-zinc mx-auto max-w-2xl dark:prose-invert">
      <h1>Datenschutzerklärung</h1>

      <p>Stand: 16. April 2025</p> {/* Aktuelles Datum einfügen */}

      <p>
        Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
      </p>

      <h2>1. Verantwortlicher für die Datenverarbeitung</h2>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
      </p>
      <p>
        Lion Knoche<br />
        Eschenweg 41<br />
        40699 Erkrath<br />
        Deutschland<br />
        E-Mail: lion.knnoche@hotmail.de {/* Korrigierter Tippfehler: knoche statt knnoche */}
        {/* Telefon: [Ihre Telefonnummer, falls vorhanden und gewünscht] */}
        {/* Website: [Ihre Website-URL] */}
      </p>
      {/* Optional: Hinweis, wenn kein Datenschutzbeauftragter benannt ist (bei kleinen Unternehmen oft der Fall) */}
      <p>Ein Datenschutzbeauftragter ist nicht bestellt, da die gesetzlichen Voraussetzungen hierfür nicht vorliegen.</p>

      <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
      <h3>Datenschutz</h3>
      <p>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      </p>
      <p>
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </p>
      <p>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
      </p>
      <h3>SSL-/TLS-Verschlüsselung</h3>
        <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
        </p>


      <h2>3. Datenerfassung auf dieser Website</h2>

      <h3>a) Hosting über Vercel</h3>
      <p>
        Unsere Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend „Vercel“) gehostet.
      </p>
      <p>
        Vercel verarbeitet Daten in unserem Auftrag, um die Bereitstellung und Sicherheit der Website zu gewährleisten. Wenn Sie unsere Website besuchen, erhebt Vercel automatisch Informationen in Server-Log-Dateien, die Ihr Browser an uns übermittelt. Dies sind:
      </p>
      <ul>
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL (die zuvor besuchte Seite)</li>
        <li>Hostname des zugreifenden Rechners (IP-Adresse, ggf. anonymisiert)</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>Angeforderte Ressource (konkrete Seite, Datei)</li>
        <li>Übertragene Datenmenge</li>
        <li>Zugriffsstatus (HTTP-Statuscode)</li>
      </ul>
      <p>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
      </p>
      <p>
        <strong>Zweck:</strong> Die Erfassung dieser Daten erfolgt zur Gewährleistung eines fehlerfreien Betriebs der Website, zur Optimierung unserer Website sowie zur Gewährleistung der Sicherheit unserer informationstechnischen Systeme.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der zuverlässigen Darstellung und Sicherheit unserer Website.
      </p>
      <p>
        <strong>Auftragsverarbeitung:</strong> Wir haben mit Vercel einen Vertrag zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO abgeschlossen. Dieser Vertrag stellt sicher, dass Vercel die Daten unserer Website-Besucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
      </p>
      <p>
        <strong>Datenübermittlung in die USA:</strong> Vercel ist ein Unternehmen mit Sitz in den USA. Eine Übermittlung personenbezogener Daten in die USA kann stattfinden. Die USA gelten derzeit nicht als sicherer Drittstaat im Sinne des EU-Datenschutzrechts. US-Unternehmen können unter bestimmten Umständen verpflichtet sein, personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Wir haben mit Vercel die Standardvertragsklauseln (Standard Contractual Clauses – SCC) der Europäischen Kommission vereinbart, um ein angemessenes Datenschutzniveau sicherzustellen. Wir beobachten die rechtliche Situation und passen unsere Maßnahmen ggf. an. Weitere Informationen zum Datenschutz bei Vercel finden Sie unter: <Link href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</Link>
      </p>
       <p>
         <strong>Speicherdauer:</strong> Die Server-Logfiles werden von Vercel in der Regel für einen kurzen Zeitraum (z.B. wenige Tage bis Wochen) gespeichert und dann gelöscht, soweit sie nicht zu Beweiszwecken länger benötigt werden. Die genaue Speicherdauer obliegt Vercel.
       </p>

      <h3>b) Cookies</h3>
        <p>
            Unsere Internetseiten verwenden teilweise so genannte „Cookies“. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Sie richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
        </p>
        <p>
            Wir unterscheiden zwischen technisch notwendigen Cookies, die für den grundlegenden Betrieb der Website erforderlich sind, und anderen Cookies (z.B. für Analyse, Marketing oder externe Medien wie YouTube).
        </p>
        <p>
            <strong>Technisch notwendige Cookies:</strong> Diese Cookies sind für die Funktion der Website erforderlich und können in unseren Systemen nicht deaktiviert werden. Sie werden normalerweise nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, die einer Dienstanforderung entsprechen, wie etwa dem Festlegen Ihrer Datenschutzeinstellungen oder dem Ausfüllen von Formularen.
            Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer technisch fehlerfreien und optimierten Bereitstellung der Dienste) bzw. § 25 Abs. 2 TTDSG.
        </p>
        <p>
            <strong>Einwilligungspflichtige Cookies und Technologien:</strong> Alle anderen Cookies sowie der Einsatz bestimmter Technologien (wie z.B. das Einbinden von YouTube-Videos im Standardmodus, siehe unten), die nicht technisch notwendig sind, erfordern Ihre vorherige Einwilligung. Diese holen wir über einen Consent-Banner ein.
            Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung dieser Cookies und Technologien ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO sowie § 25 Abs. 1 TTDSG. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie die Cookie-Einstellungen auf unserer Website anpassen.
        </p>
         <p>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
        </p>
       {/* TODO: Hier ggf. eine Tabelle oder Liste der konkret eingesetzten Cookies (Name, Anbieter, Zweck, Speicherdauer, Typ) einfügen oder auf die Einstellungsmöglichkeiten im Cookie-Banner verweisen. */}


      <h2>4. Plugins und Tools</h2>

      <h3>YouTube mit erweitertem Datenschutz</h3>
      <p>
        Diese Website bindet Videos der Website YouTube ein. Betreiber der Seiten ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Mutterunternehmen ist Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
      </p>
      <p>
        Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt laut Anbieter, dass YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor diese das Video ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den erweiterten Datenschutzmodus hingegen nicht zwingend ausgeschlossen. So stellt YouTube – unabhängig davon, ob Sie sich ein Video ansehen – eine Verbindung zum Google DoubleClick-Netzwerk her.
      </p>
      <p>
        Sobald Sie ein YouTube-Video auf dieser Website starten (d.h. aktiv anklicken), wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen, bevor Sie das Video starten.
      </p>
      <p>
        Des Weiteren kann YouTube nach Starten eines Videos verschiedene Cookies auf Ihrem Endgerät speichern oder vergleichbare Wiedererkennungstechnologien (z. B. Device-Fingerprinting) einsetzen. Auf diese Weise kann YouTube Informationen über Besucher dieser Website erhalten. Diese Informationen werden u. a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen. Diese Cookies/Technologien verbleiben auf Ihrem Endgerät, bis Sie sie löschen.
      </p>
       <p>
        Gegebenenfalls können nach dem Start eines YouTube-Videos weitere Datenverarbeitungsvorgänge ausgelöst werden, auf die wir keinen Einfluss haben.
      </p>
      <p>
        <strong>Zweck:</strong> Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Die Nutzung von YouTube (insbesondere das Starten des Videos und die damit verbundene Datenübertragung sowie das Speichern/Auslesen von Cookies/Technologien) erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, sofern die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar (z.B. über die Cookie-Einstellungen).
      </p>
      <p>
        <strong>Datenübermittlung in die USA:</strong> Da das Mutterunternehmen Google LLC in den USA sitzt, können Daten an Server von Google in den USA übermittelt werden. Wie bei Vercel erwähnt, gelten die USA nicht als sicherer Drittstaat. Wir stützen die Übermittlung auf die Standardvertragsklauseln (SCC) der EU-Kommission und Ihre Einwilligung. Durch Ihre Einwilligung zur Nutzung von YouTube stimmen Sie auch einer möglichen Datenübermittlung in die USA gemäß Art. 49 Abs. 1 lit. a DSGVO zu, obwohl dort möglicherweise kein mit der EU vergleichbares Datenschutzniveau gewährleistet ist und Risiken (z.B. Zugriff durch US-Behörden) bestehen können.
      </p>
      <p>
        Weitere Informationen zum Datenschutz bei YouTube (Google) finden Sie in deren Datenschutzerklärung unter: <Link href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</Link>.
      </p>


      <h2>5. Ihre Rechte als betroffene Person</h2>
      <p>
        Ihnen stehen bezüglich Ihrer bei uns gespeicherten personenbezogenen Daten verschiedene Rechte zu. Sie haben jederzeit das Recht auf:
      </p>
      <ul>
        <li>
          <strong>Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft Ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen.
        </li>
        <li>
          <strong>Berichtigung (Art. 16 DSGVO):</strong> Sie können unverzüglich die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.
        </li>
        <li>
          <strong>Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
        </li>
        <li>
          <strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben.
        </li>
        <li>
          <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können verlangen, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen.
        </li>
        <li>
          <strong>Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie können Ihre einmal erteilte Einwilligung jederzeit gegenüber uns widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen. Die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung wird davon nicht berührt.
        </li>
        <li>
          <strong>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Sitzes wenden. Die für uns zuständige Aufsichtsbehörde ist (sofern Ihr Sitz in NRW ist):<br/>
          {aufsichtsbehoerdeName}<br/>
          Postfach 20 04 44, 40102 Düsseldorf<br/>
          Tel.: 0211/38424-0<br/>
          E-Mail: poststelle@ldi.nrw.de<br/>
          Eine Beschwerde können Sie auch online einreichen: <Link href={aufsichtsbehoerdeUrl} target="_blank" rel="noopener noreferrer">{aufsichtsbehoerdeUrl}</Link>
        </li>
      </ul>

      <h3>Widerspruchsrecht (Art. 21 DSGVO)</h3>
        <p>
            <strong>Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben.</strong>
        </p>
        <p>
            <strong>Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an die oben unter Ziffer 1 genannte E-Mail-Adresse.</strong>
        </p>

      <h2>6. Ausübung Ihrer Rechte und Kontakt</h2>
      <p>
        Wenn Sie Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten haben, bei Auskünften, Berichtigung, Einschränkung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen oder Widerspruch gegen eine bestimmte Datenverwendung, wenden Sie sich bitte direkt an uns über die Kontaktdaten am Anfang dieser Datenschutzerklärung (Ziffer 1).
      </p>

       <h2>7. Änderung dieser Datenschutzerklärung</h2>
        <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung. Bitte informieren Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung.
        </p>

    </div>
  )
}