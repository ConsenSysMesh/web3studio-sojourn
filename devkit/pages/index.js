import React from 'react';
import Grid from '@material-ui/core/Grid';
import EyeIcon from 'react-feather/dist/icons/eye';
import GithubIcon from 'react-feather/dist/icons/github';
import Band from '../src/components/Band';
import ImageBand from '../src/components/ImageBand';
import AppExpose, {
  AppExposeColumn,
  AppExposeItem
} from '../src/components/AppExpose';
import CTACircle from '../src/components/CTACircle';
import AsideText from '../src/components/AsideText';
import InfoText from '../src/components/InfoText';
import AsideImage from '../src/components/AsideImage';
import IconBlob from '../src/components/IconBlob';
import { H1, H2, H3, H4, H5, P } from '../src/components/Typography';
import A from '../src/components/Anchor';
import { Ol, Li } from '../src/components/Lists';

import CodeBlocks from '../src/components/images/CodeBlocks';
import HamsterWorks from '../src/components/images/HamsterWorks';
import SojournLogo from '../src/components/images/SojournLogo';

const links = {
  web3Wiki: 'https://github.com/w3f/Web3-wiki/wiki',
  apacheLicense: 'https://www.apache.org/licenses/LICENSE-2.0',
  githubRepo: 'https://github.com/Consensys/imagineering-sojourn',
  rnSSSAGithubRepo: 'https://github.com/ConsenSys/react-native-sssa',
  shamirWiki: 'https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing',
  infura: 'https://infura.io/',
  chainpoint: 'https://chainpoint.org/',
  smartContractEtherscan:
    'https://rinkeby.etherscan.io/address/0xb8e2748911ef2bea3f15fa49c68a9ffdce9e0096',
  sojournMedium:
    'https://media.consensys.net/sojourn-the-journal-that-journalists-trust-to-keep-their-secrets-secret-e173bc658998'
};

const srcHref = srcPath => `${links.githubRepo}/tree/master/${srcPath}`;

const Index = () => (
  <article>
    <Band dark stacked>
      <SojournLogo />
    </Band>
    <Band dark alignItems="center" justify="space-between">
      <AsideText size={7}>
        <H1 gutterBottom>What is this developer kit</H1>
        <H4 gutterBottom>and why are you giving it away for free?</H4>
        <P gutterBottom>
          The ConsenSys Web3 Studio in Durham, NC has a pretty sweet job. Our
          team of developers, designers and writers spend our days coming up
          with what we hope are novel, unexpected ways to use blockchain and{' '}
          <A href={links.web3Wiki}>Web3-related technologies.</A>
        </P>
        <P>
          We publish stories about these uses in the form of “product reviews
          from the near future” on Medium. Then we build some of these stories
          into developer kits like this one. The kits are open source.
        </P>
        <P>
          Success for us is you taking the kit’s ideas and{' '}
          <A href={links.apacheLicense} external>
            open source
          </A>{' '}
          code and building your own web3 applications.
        </P>
      </AsideText>

      <Grid item>
        <CTACircle href={links.githubRepo}>
          <GithubIcon size={64} />
          <H4 gutterBottom color="inherit" align="center">
            Get Started!
          </H4>
          <P gutterBottom color="inherit" align="center">
            Start building your Web3 app
          </P>
          <P gutterBottom color="inherit" align="center">
            Get the Code
          </P>
        </CTACircle>
      </Grid>
    </Band>
    <Band>
      <AsideImage>
        <CodeBlocks />
      </AsideImage>
      <AsideText>
        <H2 gutterBottom>What is SoJourn?</H2>
        <P gutterBottom>
          SoJourn is a really simple example of what you can do with an approach
          to Web3 storage that our team simplified for a React Native
          application. It’s a note taking application...or rather, it is a set
          of UI and back-end components that you can use to construct your own
          Web3 note taking application.
        </P>
        <P gutterBottom>
          Think of SoJourn like the picture on a box of Legos. The important
          thing is what you do with those pieces, and we hope you find a few of
          them unique and useful in your own projects.
        </P>
        <P>
          What makes SoJourn a Web3 note taker is the way it stores data,
          minimizing the need to trust institutions to keep it safe.
        </P>
      </AsideText>
    </Band>
    <Band>
      <AsideText>
        <H3 gutterBottom>How it Works</H3>
        <P gutterBottom>
          SoJourn lets you write notes or edit existing notes. Then it:
        </P>
        <Ol>
          <Li>
            <P gutterBottom>
              Stores and encrypts the notes locally on an iPhone using the Apple
              keychain, so that all the notes are instantly available to the
              user;
            </P>
          </Li>

          <Li>
            <P gutterBottom>
              “Notarizes” the data by storing a hash onto a public blockchain
              (we’re using the Ethereum Rinkeby testnet to demonstrate), so that
              a user can prove that the original note was saved on a particular
              date and not changed since;
            </P>
          </Li>

          <Li>
            <P gutterBottom>
              Encrypts each note, divides it into parts (using{' '}
              <A href={links.shamirWiki}>Shamir’s Secret Sharing algorithm</A>
              ), and distributes each of them to different locations on IPFS.
              We’re using the{' '}
              <A href={links.infura} external>
                Infura
              </A>{' '}
              gateway as an example, but you can add your own.
            </P>
          </Li>
        </Ol>
        <P>
          This means the user doesn’t have to worry about losing their data if
          they lose their device. But – and this is important – the user also
          doesn’t have to worry about a centralized cloud service keeping the
          data secure.
        </P>
      </AsideText>
      <AsideImage>
        <HamsterWorks />
      </AsideImage>
    </Band>
    <ImageBand src="/static/shamir.png" alt="" />
    <Band dark>
      <InfoText>
        <H2 gutterBottom>Why do Web3 Data Storage This Way?</H2>
        <P gutterBottom>
          We thought of many practical uses of this kind of Web3 Storage
          pattern, the simplest of which is a diary app that lets you record
          things like your accounts of harassment, which you want to be sure
          can’t be hacked into but which you can also produce years later and
          prove that you didn’t just recently make the story up.
        </P>
        <P gutterBottom>
          The whole point of our team is to give you a leg up on your own ideas,
          but we did publish one story that might give you ideas:
        </P>
        <P>
          The{' '}
          <A href={links.sojournMedium} external>
            SoJourn story
          </A>{' '}
          was published on Medium on October 4, 2018 and received a lot of
          interest from developers and startups generally. In the story, a
          journalist is taking sensitive interview notes with a political
          informant and really wants to be sure that nobody but her will ever
          access them unless and until she wants to share them. We thought the
          user, Zoe the journalist, made a good case for a professional need for
          the functionality.
        </P>
      </InfoText>
    </Band>
    <Band>
      <AppExpose
        title="The Sojourn User Experience"
        subtitle={
          'This open source note taking app is about as basic as you can ' +
          'get, but it gives you a foundation for adding all your bells and ' +
          'whistles.'
        }
      >
        <AppExposeColumn>
          <AppExposeItem title="Authorization">
            Uses FaceID to{' '}
            <A href={srcHref('src/store/secureStorage.js')}>secure data</A>, and
            uPort to{' '}
            <A href={srcHref('src/modules/setup/uport.js')}>
              manage the wallet
            </A>{' '}
            to pay for Notary services.
          </AppExposeItem>

          <AppExposeItem title="Note List">
            Scan through existing notes and select to open the contents.
          </AppExposeItem>
        </AppExposeColumn>
        <AppExposeColumn>
          <AppExposeItem title="[Image Here]" />
        </AppExposeColumn>
        <AppExposeColumn>
          <AppExposeItem title="Create Note">
            Create a note quickly with one tap.
          </AppExposeItem>

          {/* TODO: Add header anchors and link `the vault` to it*/}
          <AppExposeItem title="Edit Note">
            Write and update a note and then save, notarize and store the latest
            version to the Vault.
          </AppExposeItem>
        </AppExposeColumn>
      </AppExpose>
    </Band>
    <Band>
      <AsideImage />
      <AsideText>
        <H3 gutterBottom>Restore from Vault</H3>
        <P gutterBottom>
          The Vault uses a Web3 approach to secure data storage, so that the
          user doesn’t have to worry about losing their device and their data
          with it.
        </P>
        <P>
          We have not added the restore function in this UI, because it relies
          on decisions you will make about how to handle passing data to the new
          device. Get the restore function code, full details of the Vault
          module, its use of{' '}
          <A href={links.rnSSSAGithubRepo}>Shamir’s Secret Sharing</A> and IPFS,
          and ideas on how to mod it for your project in the{' '}
          <A href={srcHref('src/modules/notes/vault.js')}>github repository.</A>
        </P>
      </AsideText>
    </Band>
    <Band>
      <AsideText>
        <H3 gutterBottom>Left for you</H3>
        <P gutterBottom>
          To be a complete note taking app, clearly it will want to allow the
          user to do all sorts of things, like formatting text, sorting the note
          list, and searching. These are basics that can be done in any number
          of ways and are usually where designers and app developers make their
          mark, so we have left this to you. We hope that the clarity we tried
          to achieve with the structure of the code and the docs make it easy
          for you to add functionality.
        </P>
        <P>
          Special note: The Vault enables versioning, but we implemented storage
          on device more simply, so the devKit doesn’t enable the UI to provide
          version control as-is. There are many well-known ways to implement
          data to support versioning, so we leave that to you.
        </P>
      </AsideText>
      <AsideImage />
    </Band>

    <Band justify="center">
      <H2 align="center">Key Modules</H2>
    </Band>
    <Band>
      <InfoText underlayText="01">
        <H3 gutterBottom>The Basic Notes App - UI</H3>

        {/* TODO: Figure code block formatting for ticks */}
        <P gutterBottom>
          The notes app is structured as you would expect for a redux based
          React app. For example, the screen to edit a note is in the Note
          module directory `src/modules/notes/EditNotesScreen.js`. The same
          directory contains reducers and selectors providing the business logic
          for managing apps.
        </P>

        {/* TODO: Figure out how to lay out folder structure */}
        {/*<P gutterBottom>*/}
        {/*For quick reference, the source code follows these patterns (under*/}
        {/*src/).*/}
        {/*</P>*/}
        {/*<P>[Figure out to format src]</P>*/}
      </InfoText>
    </Band>

    <Band>
      <InfoText underlayText="02">
        <H3 gutterBottom>The Vault</H3>
        <P gutterBottom>
          What makes the SoJourn framework different from a typical cloud
          note-taking application is that the Vault, which uses Shamir’s Secret
          Sharing to save a series of values to many IPFS locations. This
          eliminates the chance of a central cloud admin accessing a whole
          encrypted file and breaking its encryption. An attacker in this scheme
          would have to know which IPFS addresses correspond to the user’s data,
          and would still need the user’s private key to decrypt the file.
        </P>
        <P gutterBottom>
          This is “belt-and-suspenders” security for users that are willing to
          trade some of the benefits of “Google Docs” style cloud apps for a
          high level of assurance that cloud storage will not result in the
          potential for a bad actor at a cloud company to find, access, decypher
          or hand over data.
        </P>
        {/* TODO: Link to vault code, where will it be? */}

        <H4 gutterBottom>Vault Steps</H4>

        <H5>Encrypt the Notes</H5>
        <P gutterBottom>
          We use AES to encrypt the data during the Done function in the
          application.
        </P>
        {/* TODO: Fill in `here` and `examples` */}
        <P gutterBottom>
          AES requires an input of a 256 bit private key. The devKit
          demonstrates this by generating a private key [here]. Clearly you are
          going to want to modify this in one of several ways. [examples]
        </P>
        <P gutterBottom>
          How you manage this is going to matter in the experience you provide
          for the user to restore their data to a new device….so don’t only
          store this key on the device.
        </P>

        <H5>Grind the Notes into Little Bits</H5>
        <P gutterBottom>
          There’s a lot of history that you can learn about{' '}
          <A href={links.shamirWiki}>
            Adi Shamir and his secret sharing algorithm
          </A>{' '}
          (SSSA), which we decided to use for this pattern. But for the purposes
          of this devKit, here are the essentials:
        </P>
        <P gutterBottom>
          We needed a way to split up a file in such a way that there is no way
          to gain any information about the original content from any single
          piece, even if decrypted. In fact, the pieces should be useless
          without all the necessary segments together. SSSA does this and turns
          out to have other unexpectedly useful benefits that should give
          developers a lot of options for cool user features.
        </P>
        <P gutterBottom>
          The key terms you need to know to work with this module are:
        </P>
        <IconBlob title="secret" icon={<EyeIcon />}>
          {/* TODO: Affordance for `mod opportunity */}
          <P>
            For SSSA, the Secret is simply any bit array, but we implemented the
            Secret specifically as a Base64-encoded string, so that SSSA can
            process the AES Encrypted file that we are passing it. [Mod
            opportunity:] You can modify the code here to enable the Vault to,
            for example, take unencrypted files.
          </P>
        </IconBlob>

        {/* TODO: Link generateShares and combine functions when exists */}
        <IconBlob title="shares" icon={<EyeIcon />}>
          <P>
            We won’t get into polynomials and how SSSA does its magic. But you
            need to know that the generateShares() function returns a set of hex
            values which, through combine() allow you to reconstruct the
            original data IF you have all the shares together to pass into that
            function.
          </P>
        </IconBlob>
        <IconBlob title="Threshold" icon={<EyeIcon />}>
          <P>
            Saving Shares to decentralized storage involves the risk that some
            of the storage locations may not be available at any given time. If
            your Threshold value is set to the same number as Shares, you will
            need to be able to pull every Share successfully in order to
            reconstruct the file. On the other hand, if you set the Threshold
            value to 1, you would only need one of the Shares to reconstruct the
            file. That would kind of defeat the purpose of this whole bag of
            tricks, but you could do it. In a production application, it’s up to
            you to decide the optimal ratio of Threshold to total Shares, for
            redundancy.
          </P>
        </IconBlob>

        <H5>Storing the Shares</H5>
        <P>
          Once you have the data sliced up in to the Shares, they need to be
          stored somewhere. On this implementation, we chose to use IPFS via the
          Infura Gateway.
        </P>
        {/* TODO: Sidebar and mod opportunity thing*/}
        <P gutterBottom>
          [Sidebar] IPFS/Infura store data on many AWS instances distributed
          globally. It should be noted that currently Infura is managing this in
          a somewhat centralized way, but Infura plans to run IPFS fully
          decentralized, so consider this a proof of concept...and it may be
          good enough for many users’ privacy requirements.
        </P>
        <P gutterBottom>
          [Mod opportunity: You could modify the code here to send some of the
          Shares to gateway X and some to gateway Y. For example, a random
          number of the Shares could be stored to IPFS via Infura and the
          remainder could be stored to Storj or even traditional storage
          options. If no party has a Threshold number of Shares, they have
          nothing.]
        </P>
        <P gutterBottom>
          IPFS stores data by hashing the content and using that hash as the
          address to access the data. Infura combines the hash with the prefix
          https://gateway.ipfs.io/ipfs/[hash] to enable any browser to pull up
          the data at that location. In short, all IPFS locations are accessible
          to the public. That sounds like the opposite of privacy, perhaps, but
          thanks to the previous step of splitting the data into Shares, the
          probability of an attacker finding the correct set of Shares to
          reconstruct the file is astronomically small. Pretty cool, yeah?
        </P>

        {/* TODO: Add copy here*/}
        <P gutterBottom>
          [The api for Infura is here. And to implement it, place your code
          here.]
        </P>

        <H5>Storing the secret locations to find the Shares</H5>
        <P>
          If the user can’t supply the locations of a Threshold number of Shares
          to their data, the data is as good as gone. They will never find it
          out there in IPFS. So it is critical that your app store the file
          locations somewhere in a secure way, so that the user can use it to
          restore their data. It should also be stored away from the user’s
          private key for AES, so that an attacker would have to gain access to
          two separate resources in order to both reconstruct and decrypt the
          file.
        </P>
        {/* TODO: Insert file repo location */}
        <P gutterBottom>
          Infura returns a hash of each Share location serially, and the code in
          [insert repo file location] will concatenate the hashes into an array,
          which, depending on how your application manages this, you will use to
          let the user restore their data (e.g., in the event of them losing
          their phone).
        </P>
      </InfoText>
    </Band>
    <Band />

    <Band dark>
      <InfoText>
        <H2 gutterBottom>Alternative Approaches</H2>
        <P gutterBottom>
          We built the SoJourn devKit with an eye toward providing a clean, open
          source Shamir’s Secret Sharing library that works for React Native
          apps. Mission accomplished.
        </P>
        <P gutterBottom>
          Until recently, there were no well-known ways to do Web3 storage in a
          way that we considered acceptable for very secret data. It’s one thing
          to worry about a system admin at AWS, but I’ll take that over some guy
          somewhere with a hard disk on a public network storing my file, even
          if it is encrypted.
        </P>
        {/* TODO: Add Storj content */}
        <P gutterBottom>
          However, there are new ways emerging of splitting up files, rendering
          them useless without also having many other slices, and storing them
          on decentralized infrastructure emerging. One service is Storj’s
          upcoming version 3. [Storj...add content here.]
        </P>
        <P>
          In fact, you might want to consider modifying the Vault to not only
          store shares on IPFS but also on Storj and other gateways, for an
          additional assurance that no single gateway provider trafficked in
          enough shares to reconstruct the file. All depends on how paranoid you
          want to be. (Storj might also be a good choice for storing the
          encrypted location file that SoJourn needs to restore data to a new
          device.)
        </P>
      </InfoText>
    </Band>

    <Band>
      <InfoText underlayText="03">
        <H3 gutterBottom>The Notary</H3>
        <P gutterBottom>
          The Notary service handles the hashing of user notes onto a
          blockchain, preferably a mainnet like Ethereum’s, so that there is a
          solid chance of long-term continuity and strong tamper-resistance.
        </P>
        <P gutterBottom>
          If we were doing this all over again, we’d probably make the Notary
          library stand apart, or use something like{' '}
          <A href={links.chainpoint} external>
            Chainpoint
          </A>{' '}
          but here’s what we have:
        </P>
        <P gutterBottom>
          A <A href={srcHref('contracts/HashNotary.sol')}>Smart Contract</A> is
          responsible for storing the note’s hash and timestamp. (We’ve provided
          the address of the living contract that we wrote onto the Ethereum
          Rinkeby testnet for demonstration).
        </P>
        <P gutterBottom>
          At the user’s request, we use Web3.js in{' '}
          <A href={srcHref('src/modules/notes/notesReducer.js')}>
            the note app
          </A>{' '}
          that calls the Notary function on the smart contract.
        </P>
      </InfoText>
    </Band>

    <Band>
      <InfoText underlayText="04">
        <H3 gutterBottom>Authentication & Wallet</H3>
        <P>
          The SoJourn devKit for demonstration uses iPhone Face ID for app
          authentication and to{' '}
          <A href={srcHref('src/store/secureStorage.js')}>
            decrypt the local copy
          </A>{' '}
          of the notes data.
        </P>
        <P>
          The Notary module uses gas, because we implemented the Ethereum
          Rinkeby testnet for demonstration. That means the app needs a wallet.
          We{' '}
          <A href={srcHref('src/modules/setup')}>
            implemented the uPort wallet
          </A>{' '}
          for demonstration, which the user can set up when the app is first
          loaded.
        </P>
      </InfoText>
    </Band>

    <Band dark>
      <InfoText>
        <H2 gutterBottom>Have Fun Stormin’ the Castle!</H2>
        <P>
          So there it is. We hope that the code and our descriptions of the Web3
          storage pattern above, along with the story of the SoJourn notes
          application, give you great ideas and a leg-up building your own
          awesome applications.
        </P>
        <P gutterBottom>
          Remember, this is totally open source code on an Apache 2 license.
        </P>
        <P gutterBottom>What do we want in return? Two things:</P>
        <Ol>
          <Li>
            We never say no to tweets and other signs of thanks and comments;
          </Li>
          {/* TODO: Fill in catchers mit*/}
          <Li>
            We want to hear about what you are building, so send us updates to
            [hmmmm...need a catcher’s mit];
          </Li>
        </Ol>
      </InfoText>
    </Band>
  </article>
);

export default Index;
