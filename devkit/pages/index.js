import React from 'react';
import Grid from '@material-ui/core/Grid';
import EyeIcon from 'react-feather/dist/icons/eye';
import LockIcon from 'react-feather/dist/icons/lock';
import ShieldIcon from 'react-feather/dist/icons/shield';
import GithubIcon from 'react-feather/dist/icons/github';
import YouTube from '../src/components/YouTube';
import Band from '../src/components/Band';
import ImageBand from '../src/components/ImageBand';
import CTACircle from '../src/components/CTACircle';
import AsideText from '../src/components/AsideText';
import InfoText from '../src/components/InfoText';
import AsideImage from '../src/components/AsideImage';
import IconBlob from '../src/components/IconBlob';
import { H1, H2, H3, H4, H5, P, Subtitle } from '../src/components/Typography';
import A from '../src/components/Anchor';
import { Ol, Li } from '../src/components/Lists';

import CodeBlocks from '../src/components/images/CodeBlocks';
import HamsterWorks from '../src/components/images/HamsterWorks';
import SojournLogo from '../src/components/images/SojournLogo';
import ShamirWorkflow from '../src/components/images/ShamirWorkflow';
const links = {
  web3Wiki: 'https://github.com/w3f/Web3-wiki/wiki',
  apacheLicense: 'https://www.apache.org/licenses/LICENSE-2.0',
  githubRepo: 'https://github.com/Consensys/web3studio-sojourn',
  rnSSSAGithubRepo: 'https://github.com/ConsenSys/react-native-sssa',
  aesGithubRepo: 'https://github.com/tectiv3/react-native-aes',
  shamirWiki: 'https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing',
  rinkeby: 'https://www.rinkeby.io/',
  infura: 'https://infura.io/',
  infuraReadDocs: 'https://infura.io/docs/ipfs/get/get',
  ipfsGettingStarted:
    'https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/',
  storjUplinkDocs: 'https://github.com/storj/docs/blob/master/uplink-cli.md',
  storjS3Docs: 'https://github.com/storj/docs/blob/master/s3-gateway.md',
  chainpoint: 'https://chainpoint.org/',
  smartContractEtherscan:
    'https://rinkeby.etherscan.io/address/0xb8e2748911ef2bea3f15fa49c68a9ffdce9e0096',
  web3StudioMedium: 'https://medium.com/web3studio',
  sojournMedium:
    'https://media.consensys.net/sojourn-the-journal-that-journalists-trust-to-keep-their-secrets-secret-e173bc658998',
  twitter: 'https://twitter.com/web3studio',
  youtubeChannel: 'https://www.youtube.com/channel/UCM1wUXmODZbVLoCocwrW7uQ'
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
        <P paragraph>
          The ConsenSys Web3 Studio in Durham, NC has a pretty sweet job. Our
          team of developers, designers and writers spend our days coming up
          with what we hope are novel, unexpected ways to use blockchain and{' '}
          <A href={links.web3Wiki}>Web3-related technologies.</A>
        </P>
        <P paragraph>
          We publish stories about these uses in the form of “product reviews
          from the near future” on <a href={links.web3StudioMedium}>Medium</a>.
          Then we build some of these stories into developer kits like this one.
          The kits are open source.
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
          <H4 paragraph color="inherit" align="center">
            Get Started!
          </H4>
          <P paragraph color="inherit" align="center">
            Start building your Web3 app
          </P>
          <P paragraph color="inherit" align="center">
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
        <H2 paragraph>What is SoJourn?</H2>
        <P paragraph>
          SoJourn is a really simple example of what you can do with an approach
          to Web3 storage that our team simplified for a React Native
          application. It’s a note taking application...or rather, it is a set
          of UI and back-end components that you can use to construct your own
          Web3 note taking application.
        </P>
        <P paragraph>
          Think of SoJourn like the picture on a box of Legos. The important
          thing is what you do with those pieces, and we hope you find a few of
          them unique and useful in your own projects.
        </P>
        <P>
          What makes SoJourn a “Web3” note-taking application? The way it stores
          data, minimizing the need to trust institutions to keep it safe.
        </P>
      </AsideText>
    </Band>
    <Band>
      <AsideText>
        <H3 paragraph>How it Works</H3>
        <P paragraph>
          SoJourn lets you write notes or edit existing notes. Then it:
        </P>
        <Ol>
          <Li>
            <P paragraph>
              Stores and encrypts the notes locally on an iPhone using the Apple
              keychain, so that all the notes are instantly available to the
              user;
            </P>
          </Li>

          <Li>
            <P paragraph>
              “Notarizes” the data by storing a hash onto a public blockchain
              (we’re using the Ethereum{' '}
              <A href={links.rinkeby} external>
                Rinkeby testnet
              </A>{' '}
              to demonstrate), so that a user can prove that the original note
              was saved on a particular date and not changed since;
            </P>
          </Li>

          <Li>
            <P paragraph>
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
    <ImageBand>
      <ShamirWorkflow />
    </ImageBand>
    <Band dark>
      <InfoText>
        <H2 paragraph>Why do Web3 Data Storage This Way?</H2>
        <P paragraph>
          We thought of many practical uses of this kind of Web3 Storage
          pattern. The simplest is a diary app that lets you record things, for
          example, like an account of harassment, which you want to be sure
          can’t be hacked into but which you can also produce years later and
          prove that you didn’t just recently make the story up.
        </P>
        <P paragraph>
          The whole point of our team is to give you a leg up on your own ideas,
          but we did publish one story that might give you ideas:
        </P>
        {/* TODO: This would be a great place to add statistics
        https://www.nytimes.com/2018/10/11/world/americas/journalists-killed.html */}
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
      <AsideText>
        <H2 gutterBottom>The SoJourn User Experience</H2>
        <P lastInSection>
          This open source note taking app is about as basic as you can get, but
          it gives you a foundation for adding all your bells and whistles.
        </P>

        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Subtitle paragraph>AUTHORIZATION</Subtitle>
            <P paragraph>
              Uses FaceID to{' '}
              <A href={srcHref('src/store/secureStorage.js')}>secure data</A>,
              and uPort to{' '}
              <A href={srcHref('src/modules/setup/uport.js')}>
                manage the wallet
              </A>{' '}
              to pay for Notary services.
            </P>
          </Grid>

          <Grid item xs={6}>
            <Subtitle paragraph>NOTE LIST</Subtitle>
            <P paragraph>
              Scan through existing notes and select to open the contents.
            </P>
          </Grid>
          <Grid item xs={6}>
            <Subtitle paragraph>CREATE NOTE</Subtitle>
            <P lastInSection>Create a note quickly with one tap.</P>
          </Grid>
          <Grid item xs={6}>
            <Subtitle paragraph>EDIT NOTE</Subtitle>
            <P lastInSection>
              Write and update a note and then save, notarize and store the
              latest version to the Vault.
            </P>
          </Grid>
        </Grid>

        <H3 paragraph>Restore from Vault</H3>
        {/* TODO, link to vault section on page */}
        <P paragraph>
          The Vault uses a Web3 approach to secure data storage, so that the
          user doesn’t have to worry about losing their device and their data
          with it.
        </P>
        {/* TODO Where is the code and are the comments in the file good
        enough to explain how everything works. Vault.js should be
        "The best commented thing in the repo" */}
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
      <AsideImage>
        {/* TODO: Placeholder for phone screen*/}
        <HamsterWorks />
      </AsideImage>
    </Band>
    <Band dark>
      <InfoText>
        <H3 paragraph>Left for you</H3>
        <P paragraph>
          To be a complete note taking app, clearly your project will want to
          allow the user to do all sorts of things, like formatting text,
          sorting the note list, and searching. These are basics that can be
          done in any number of ways and are usually where designers and app
          developers make their mark, so we have left this to you. We hope that
          the clarity we tried to achieve with the structure of the code and the
          docs make it easy for you to add functionality.
        </P>
        <P>
          Because IPFS stores files permanently, the Vault is capable of
          versioning. We implemented storage on device more simply, so the
          devKit doesn’t enable the UI to provide version control as-is. There
          are many well-known ways to implement versioning, so we leave that to
          you.
        </P>
      </InfoText>
      <AsideImage />
    </Band>

    <Band justify="center">
      <H2 align="center">Key Modules</H2>
    </Band>
    <Band>
      <InfoText underlayText="01">
        <H3 paragraph>The Basic Notes App - UI</H3>
        <P paragraph>
          The notes app is structured as you would expect for a redux based
          React app. For example, the screen to edit a note is in the note{' '}
          <A href={srcHref('src/modules/notes')}>module directory</A>. The same
          directory contains reducers and selectors providing the business logic
          for managing apps.
        </P>

        {/* TODO: Figure out how to lay out folder structure */}
        {/*<P paragraph>*/}
        {/*For quick reference, the source code follows these patterns (under*/}
        {/*src/).*/}
        {/*</P>*/}
        {/*<P>[Figure out to format src]</P>*/}
      </InfoText>
    </Band>

    <Band>
      <InfoText underlayText="02">
        <H3 paragraph>The Vault</H3>
        <P paragraph>
          What makes the SoJourn framework different from a typical cloud
          note-taking application is that the Vault, which uses Shamir’s Secret
          Sharing to save a series of values to many IPFS locations. This
          eliminates the chance of a central cloud admin accessing a whole
          encrypted file and breaking its encryption. An attacker in this scheme
          would have to know which IPFS addresses correspond to the user’s data,
          and would still need the user’s private key to decrypt the file.
        </P>
        <P lastInSection>
          This is “belt-and-suspenders” security for users that are willing to
          trade some of the benefits of “Google Docs” style cloud apps for a
          high level of assurance that cloud storage will not result in the
          potential for a bad actor at a cloud company to find, access, decypher
          or hand over data.
        </P>
        {/* TODO: Link to vault code, where will it be? */}

        <H4 lastInSection>Vault Procedure</H4>

        <H5 gutterBottom>Encrypt the Notes</H5>
        <P paragraph>
          We use <A href={links.aesGithubRepo}>AES</A> to encrypt the data
          during the Done function in the application.
        </P>
        {/* TODO: Fill in `here` and `examples` */}
        <P paragraph>
          AES requires an input of a 256 bit private key. The devKit
          demonstrates this by generating a private key [here]. Clearly you are
          going to want to modify this in one of several ways. [examples]
        </P>

        <P lastInSection>
          How you handle private key sharing and storage is going to matter in
          the experience you provide for the user to restore their data to a new
          device… so don’t only keep it on one device.
        </P>

        <H5 gutterBottom>Grind the Notes into Little Bits</H5>
        <P paragraph>
          There’s a lot of history that you can learn about Adi Shamir and his{' '}
          <A href={links.shamirWiki}>secret sharing algorithm</A> (SSSA), which
          we decided to use for this pattern. But for the purposes of this
          devKit, here are the essentials:
        </P>
        <P paragraph>
          We needed a way to split up a file in such a way that there is no way
          to gain any information about the original content from any single
          piece, even if decrypted. In fact, the pieces should be useless
          without all the necessary segments together. SSSA does this and turns
          out to have other unexpectedly useful benefits, like better redundancy
          and quicker file reassembly, and that should give developers a lot of
          options for cool user features.
        </P>
        <P lastInSection>
          The key terms you need to know to work with this module are:
        </P>
        <IconBlob title="secret" icon={<LockIcon />}>
          {/* TODO: link to code */}
          <P paragraph>
            For SSSA, the Secret is simply any bit array, but we implemented the
            Secret specifically as a Base64-encoded string, so that SSSA can
            process the AES Encrypted file that we are passing it. You can
            modify the code here to enable the Vault to, for example, take
            unencrypted files.
          </P>
        </IconBlob>

        {/* TODO: Link generateShares and combine functions when exists */}
        <IconBlob title="shares" icon={<ShieldIcon />}>
          <P paragraph>
            We won’t get into polynomials and how SSSA does its magic. But you
            need to know that the generateShares() function returns a set of hex
            values which, through combine() allow you to reconstruct the
            original data IF you have all the shares together to pass into that
            function.
          </P>
        </IconBlob>

        <IconBlob title="Threshold" icon={<EyeIcon />}>
          <P lastInSection>
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

        <H5 gutterBottom>Storing the Shares</H5>
        <P paragraph>
          Once you have the data sliced up in to the Shares, they need to be
          stored somewhere. On this implementation, we chose to use IPFS via the
          Infura Gateway.
        </P>
        {/* TODO: Make this an inset (maybe)?*/}
        <P paragraph>
          Infura stores data on many AWS instances distributed globally. It
          should be noted that currently Infura is managing this in a somewhat
          centralized way, but Infura plans to run IPFS fully decentralized, so
          consider this a proof of concept...and it may be good enough for many
          users’ privacy requirements.
        </P>
        <P lastInSection>
          IPFS stores data by hashing the content and using that hash as the
          address to access the data. You can then{' '}
          <A href={links.ipfsGettingStarted}>use the hash</A> to enable any
          browser to pull up the data at that location. In short, all IPFS
          locations are accessible to the public. That sounds like the opposite
          of privacy, perhaps, but thanks to the previous step of splitting the
          data into Shares, the probability of an attacker finding the correct
          set of Shares to reconstruct the file is astronomically small. Pretty
          cool, yeah?
        </P>

        <H5 gutterBottom>Storing the secret locations to find the Shares</H5>
        <P paragraph>
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
        <P>
          IPFS returns a hash of each Share location, and the code in [insert
          repo file location] will concatenate the hashes into an array, which,
          depending on how your application manages this, you will use to let
          the user restore their data (e.g., in the event of them losing their
          phone).
        </P>
      </InfoText>
    </Band>

    <Band dark>
      <InfoText>
        <H2 gutterBottom>Alternative Approaches</H2>
        <P paragraph>
          We built the SoJourn devKit with an eye toward providing a clean, open
          source Shamir’s Secret Sharing library that works for React Native
          apps. Mission accomplished.
        </P>
        <P paragraph>
          Until recently, there were no well-known ways to do Web3 storage in a
          way that we considered acceptable for very secret data. It’s one thing
          to worry about a system admin at AWS, but we’d take that over some guy
          somewhere with a hard disk on a public network storing my file, even
          if it is encrypted.
        </P>
        <P paragraph>
          However, there are new ways emerging of splitting up files, rendering
          them useless without also having many other slices, and storing them
          on decentralized infrastructure. One service is Storj’s upcoming
          version 3.
        </P>
        <P paragraph>
          In order to add Storj as another location for the Shares, modify [your
          LINK] for use with the Storj Uplink Client. If you don’t want to use
          Shamir’s and want to simply replace the Vault with standard Storj,
          check out Storj’s tutorials on GitHub for the{' '}
          <A href={links.storjUplinkDocs}>uplink client</A> and{' '}
          <A href={links.storjS3Docs}>S3 gateway.</A>
        </P>
        <P>
          In fact, you might want to consider modifying the Vault to not only
          store shares on IPFS but also on Storj and other storage providers,
          for an additional assurance that no single gateway provider trafficked
          in enough shares to reconstruct the file. All depends on how paranoid
          you want to be. (Storj might also be a good choice for storing the
          encrypted location file that SoJourn needs to restore data to a new
          device.)
        </P>
      </InfoText>
    </Band>

    <Band>
      <InfoText underlayText="03">
        <H3 gutterBottom>The Notary</H3>
        <P paragraph>
          The Notary service handles the hashing of user notes onto a
          blockchain, preferably a mainnet like Ethereum’s, so that there is a
          solid chance of long-term continuity and strong tamper-resistance.
        </P>
        <P paragraph>
          If we were doing this all over again, we’d probably make the Notary
          library stand apart, or use something like{' '}
          <A href={links.chainpoint} external>
            Chainpoint
          </A>{' '}
          but here’s what we have:
        </P>

        <P paragraph>
          A <A href={srcHref('contracts/HashNotary.sol')}>Smart Contract</A> is
          responsible for storing the note’s hash and timestamp. We’ve provided
          the address of the{' '}
          <A href={links.smartContractEtherscan}>living contract</A> that we
          deployed onto the Ethereum Rinkeby testnet for demonstration.
        </P>
        <P paragraph>
          Then, at the user’s request, we use Web3.js in{' '}
          <A href={srcHref('src/modules/notes/notesReducer.js')}>
            the note app
          </A>{' '}
          to use the Notary function on the smart contract.
        </P>
      </InfoText>
    </Band>

    <Band>
      <InfoText underlayText="04">
        <H3 gutterBottom>Authentication & Wallet</H3>
        <P paragraph>
          The SoJourn devKit for demonstration uses iPhone Face ID for app
          authentication and to{' '}
          <A href={srcHref('src/store/secureStorage.js')}>
            decrypt the local copy
          </A>{' '}
          of the notes data.
        </P>

        <P>
          The Notary module uses gas. We made this choice to demonstrate using
          the Ethereum Rinkeby testnet. That means the app needs a wallet and we{' '}
          <A href={srcHref('src/modules/setup')}>implemented uPort’s</A> which
          the user can set up when the app is first loaded.
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
        <P paragraph>
          Remember, this is totally open source code on an Apache 2 license.
        </P>
        <P paragraph>What do we want in return? Two things:</P>
        <Ol>
          <Li>
            <P>
              We never say no to{' '}
              <A href={links.twitter} external>
                tweets
              </A>{' '}
              and other signs of thanks and comments;
            </P>
          </Li>
          <Li>
            <P>
              We want to hear about what you are building!{' '}
              <A href={links.twitter} external>
                Tweet us
              </A>{' '}
              and let us know.
            </P>
          </Li>
        </Ol>
      </InfoText>
    </Band>
    <Band>
      <InfoText>
        <H2 gutterBottom>The Making Of</H2>
        <P lastInSection>
          We want to give you a detailed look at our thinking around how we
          built this devkit. Often when building things you run into challenges
          and gain tribal knowledge that we want to share, with you. To see all
          of our videos, check out our{' '}
          <A href={links.youtubeChannel} external>
            YouTube Channel.
          </A>
        </P>
      </InfoText>
      <Grid container spacing={24} justify="center">
        <Grid item xs={12} md={8} lg={6}>
          <YouTube videoId="AIASbss0LMw" />
        </Grid>
      </Grid>
    </Band>
  </article>
);

export default Index;
