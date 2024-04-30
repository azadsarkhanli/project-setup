import { PublicationFormat } from '../../common/graphql';
import { GraphQlNode } from '../../common/types';
import { ProductBundleQuery } from '../../features/catalog/graphql';

export const productBundle: Extract<
  ProductBundleQuery['productBundle'],
  GraphQlNode<'ProductBundle'>
> = {
  __typename: 'ProductBundle',
  id: '9788203268663',
  isbn: '9788203268663',
  authorsFormatted: 'Jo Nesbø',
  title: 'Kongeriket',
  description:
    "«Jøss, så god han er ... en uhyggelig god roman, som ingen andre enn Nesbø kunne skrevet.» Cathrine Krøger, Dagbladet (Terningkast 6)\\nI en liten norsk bygd lever bilmekanikeren Roy et relativt fredelig og enkelt liv da lillebroren Carl vender hjem etter mange år i utlandet. Med Carl, hans nye kone Shannon og planene om et høyfjellshotell som kan skape nytt liv i den lille bygda, begynner mørke hemmeligheter fra guttenes barndom igjen å piple fram. Da de var små, forsvarte Roy broren mot mobbere og mørke rykter, men lojaliteten mellom brødrene settes på prøve når grådighet og svik kommer i veien for Carls planer.\\nNår bygdas lensmann på nytt begynner å stille spørsmål ved det tragiske dødsfallet til guttenes foreldre, må Roy ta stilling til hvor langt han er villig til å gå for å beskytte broren. Og hvordan skal egentlig Roy forholde seg til at Shannon fanger hans oppmerksomhet?\\nKongeriket er en mørk og mektig spenningsroman fra bygde-Norge - om ambisjoner, lojalitet og kjærlighet. Ikke minst er det en roman om hemmeligheter som truer med å kutte båndene mellom to brødre.\\n«Kongeriket er noe av det aller beste Jo Nesbø har gjort - det sier ikke reint lite.» Tor Hammerø, Nettavisen (Terningkast 6)\\n«Her er kjærlighet og svik, mørke hemmeligheter og dyp skam, grådighet og begjær ... » Ole Jacob Hoel, Adresseavisen (Terningkast 5)\\n«... en fortelling som minner om hvorfor Jo Nesbø er i en klasse for seg i norsk spenningslitteratur. Nesbø tillater seg som vanlig å skrive lenger enn alle sine norske konkurrenter, og likevel er det nesten synd når «Kongeriket» tar slutt.» Geir Rakvaag, Dagsavisen\\n«En mørk, sterk bygdekrim om familiehemmeligheter, dødelig kjærlighet, sterkt samhold og brå død.» Atle Nielsen, Bok365 (Terningkast 5)\\n«Her spruter blodet i rikelige doser, kvinnene er fatale og uimotståelige og hevnen er søt.»\\nSindre Hovdenakk, VG\\n«Jo Nesbø har skrevet en ulidelig spennende roman.» Lars Ole Sauerberg, Jyllands-Posten (6 stjerner)\\n«Henrik Ibsen i cowboystøvler og Cadillac. Sørg for at du sitter godt, når du går i gang med Jo Nesbøs bokstavelig talt enestående krim. I Kongeriket viser Nesbø igjen at han er en av krimsjangerens beste.» Bo Tao Michaëlis, Politiken (Fem av seks hjerter)\\n«... aldeles fremragende thriller.»  Merete Reinholdt, Berlingske (Fem stjerner)\\n«I read THE KINGDOM and couldn't put it down ... suspenseful ... original ... this one is special in every way.» Stephen King",
  thumbnailUri: 'https://dj4fsg3e1je59.cloudfront.net/9788203268663/img/0',
  products: [
    {
      __typename: 'Product',
      id: '9788203268663',
      metadata: {
        __typename: 'ProductMetadata',
        id: '9788203268663',
        isbn: '9788203268663',
        authorsFormatted: 'Jo Nesbø',
        format: PublicationFormat.Ebook,
        thumbnailUri:
          'https://dj4fsg3e1je59.cloudfront.net/9788203268663/img/0',
        title: 'Kongeriket',
        description:
          "«Jøss, så god han er ... en uhyggelig god roman, som ingen andre enn Nesbø kunne skrevet.» Cathrine Krøger, Dagbladet (Terningkast 6)\\nI en liten norsk bygd lever bilmekanikeren Roy et relativt fredelig og enkelt liv da lillebroren Carl vender hjem etter mange år i utlandet. Med Carl, hans nye kone Shannon og planene om et høyfjellshotell som kan skape nytt liv i den lille bygda, begynner mørke hemmeligheter fra guttenes barndom igjen å piple fram. Da de var små, forsvarte Roy broren mot mobbere og mørke rykter, men lojaliteten mellom brødrene settes på prøve når grådighet og svik kommer i veien for Carls planer.\\nNår bygdas lensmann på nytt begynner å stille spørsmål ved det tragiske dødsfallet til guttenes foreldre, må Roy ta stilling til hvor langt han er villig til å gå for å beskytte broren. Og hvordan skal egentlig Roy forholde seg til at Shannon fanger hans oppmerksomhet?\\nKongeriket er en mørk og mektig spenningsroman fra bygde-Norge - om ambisjoner, lojalitet og kjærlighet. Ikke minst er det en roman om hemmeligheter som truer med å kutte båndene mellom to brødre.\\n«Kongeriket er noe av det aller beste Jo Nesbø har gjort - det sier ikke reint lite.» Tor Hammerø, Nettavisen (Terningkast 6)\\n«Her er kjærlighet og svik, mørke hemmeligheter og dyp skam, grådighet og begjær ... » Ole Jacob Hoel, Adresseavisen (Terningkast 5)\\n«... en fortelling som minner om hvorfor Jo Nesbø er i en klasse for seg i norsk spenningslitteratur. Nesbø tillater seg som vanlig å skrive lenger enn alle sine norske konkurrenter, og likevel er det nesten synd når «Kongeriket» tar slutt.» Geir Rakvaag, Dagsavisen\\n«En mørk, sterk bygdekrim om familiehemmeligheter, dødelig kjærlighet, sterkt samhold og brå død.» Atle Nielsen, Bok365 (Terningkast 5)\\n«Her spruter blodet i rikelige doser, kvinnene er fatale og uimotståelige og hevnen er søt.»\\nSindre Hovdenakk, VG\\n«Jo Nesbø har skrevet en ulidelig spennende roman.» Lars Ole Sauerberg, Jyllands-Posten (6 stjerner)\\n«Henrik Ibsen i cowboystøvler og Cadillac. Sørg for at du sitter godt, når du går i gang med Jo Nesbøs bokstavelig talt enestående krim. I Kongeriket viser Nesbø igjen at han er en av krimsjangerens beste.» Bo Tao Michaëlis, Politiken (Fem av seks hjerter)\\n«... aldeles fremragende thriller.»  Merete Reinholdt, Berlingske (Fem stjerner)\\n«I read THE KINGDOM and couldn't put it down ... suspenseful ... original ... this one is special in every way.» Stephen King",
        language: 'Bokmål',
        readerVoice: null,
        releaseDate: '2020',
        uniqueSellingPoint: null,
        genres: ['Krim', 'Thrillere'],
        playTime: null,
        pages: '630',
        publisher: 'Aschehoug',
        seriesNumber: null,
        seriesTitle: null,
      },
    },
    {
      __typename: 'Product',
      id: '9788203365270',
      metadata: {
        __typename: 'ProductMetadata',
        id: '9788203365270',
        isbn: '9788203365270',
        authorsFormatted: 'Jo Nesbø',
        format: PublicationFormat.Audiobook,
        thumbnailUri:
          'https://dj4fsg3e1je59.cloudfront.net/9788203365270/img/0',
        title: 'Kongeriket',
        description:
          'I en liten norsk bygd lever bilmekanikeren Roy et relativt fredelig og enkelt liv da lillebroren Carl vender hjem etter mange år i utlandet. Med Carl, hans nye kone Shannon og planene om et høyfjellshotell som kan skape nytt liv i den lille bygda, begynner mørke hemmeligheter fra guttenes barndom igjen å piple fram. Da de var små, forsvarte Roy broren mot mobbere og mørke rykter, men lojaliteten mellom brødrene settes på prøve når grådighet og svik kommer i veien for Carls planer. \\nNår bygdas lensmann på nytt begynner å stille spørsmål ved det tragiske dødsfallet til guttenes foreldre, må Roy ta stilling til hvor langt han er villig til å gå for å beskytte broren. Og hvordan skal egentlig Roy forholde seg til at Shannon fanger hans oppmerksomhet? \\n \\nKongeriket er en mørk og mektig spenningsroman fra bygde-Norge - om ambisjoner, lojalitet og kjærlighet. Ikke minst er det en roman om hemmeligheter som truer med å kutte båndene mellom to brødre.',
        language: 'Bokmål',
        readerVoice: null,
        releaseDate: '2020',
        uniqueSellingPoint: null,
        genres: ['Krim', 'Thrillere'],
        playTime: '1054min.',
        pages: '0',
        publisher: 'Aschehoug',
        seriesNumber: null,
        seriesTitle: null,
      },
    },
  ],
};
