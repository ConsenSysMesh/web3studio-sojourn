import React from 'react';
import Grid from '@material-ui/core/Grid';
import HeartIcon from 'react-feather/dist/icons/heart';
import EyeIcon from 'react-feather/dist/icons/eye';
import LockIcon from 'react-feather/dist/icons/lock';
import SunIcon from 'react-feather/dist/icons/sun';
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
import { H1, H2, H3, H4, P } from '../src/components/Typography';

import CodeBlocks from '../src/components/images/CodeBlocks';
import HamsterWorks from '../src/components/images/HamsterWorks';
import SojournLogo from '../src/components/images/SojournLogo';

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
          with what we hope are novel, unexpected ways to use blockchain and
          Web3-related technologies. We publish stories about these uses in the
          form of what we call “product reviews from the near future.” Then we
          build some of these stories into developer kits like this one. The
          kits are open source.
        </P>
        <P>
          Success for us is you taking the kit’s ideas and code and building
          your own web3 applications.
        </P>
      </AsideText>

      <Grid item>
        <CTACircle href="https://github.com/Consensys/imagineering-sojourn">
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
        <H2 gutterBottom>What is Sojourn</H2>
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
        <ol>
          <li>
            <P gutterBottom>
              Stores and encrypts the notes locally on an iPhone using the Apple
              keychain, so that all the notes are instantly available to the
              user;
            </P>
          </li>

          <li>
            <P gutterBottom>
              “Notarizes” the data by storing a hash onto a public blockchain
              (we’re using the Ethereum Rinkeby testnet to demonstrate), so that
              a user can prove that the original note was saved on a particular
              date and not changed since;
            </P>
          </li>

          <li>
            <P gutterBottom>
              Encrypts each note, divides it into parts (using Shamir’s Secret
              Sharing algorithm), and distributes each of them to different
              locations on IPFS. We’re using the Infura gateway as an example,
              but you can add your own.
            </P>
          </li>
        </ol>
        <P>
          This means the user doesn’t have to worry about losing their data if
          they lose their device. But – and this is important – the user also
          doesn’t have to worry about a centralized cloud service keeping the
          data secure. [Insert video.]
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
          things like your account of harassment, which you want to be sure
          can’t be hacked into but which you can also produce years later and
          prove that you didn’t just recently make the story up.
        </P>
        <P gutterBottom>
          The whole point of our team is to give you a leg up on your own ideas,
          but we did publish one story that might give you ideas:
        </P>
        <P>
          The SoJourn story was published on Medium on October 4, 2018 and
          received a lot of interest from developers and startups generally. In
          the story, a journalist is taking sensitive interview notes with a
          political informant and really wants to be sure that nobody but her
          will ever access them unless and until she wants to share them. We
          thought the user, Zoe the journalist, made a good case for a
          professional need for the functionality.
        </P>
      </InfoText>
    </Band>
    <Band>
      <AppExpose
        title="The Sojourn User Experience"
        subtitle={
          'This open source note taking app is about as basic as you can get,' +
          ' but it gives you a foundation for adding all your bells and whistles.'
        }
      >
        <AppExposeColumn>
          <AppExposeItem
            title="Log-in"
            body="is provided by uPort in our code. You can modify that here."
          />

          <AppExposeItem
            title="Note List"
            body="Scan through existing notes and select to open the contents."
          />
        </AppExposeColumn>
        <AppExposeColumn>
          <AppExposeItem title="[Image Here]" />
        </AppExposeColumn>
        <AppExposeColumn>
          <AppExposeItem
            title="Create Note"
            body="Create a note quickly with one tap."
          />

          <AppExposeItem
            title="Edit Note"
            body="Update a note and then save, notarize and store the latest version to the Vault."
          />
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
          device. Access full details of the Vault module, its use of Shamir’s
          Secret Sharing and IPFS, and approaches to modifying it for your
          project here.
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
    <Band>
      <AsideText size={6}>
        <H3 gutterBottom>Other things you could use it for</H3>
        <P gutterBottom>
          At half-past eight the door opened, the policeman appeared, and,
          requesting them to follow him, led the way to an adjoining hall. It
          was evidently.
        </P>
      </AsideText>
      <Grid container item xs={12} md={6} spacing={24}>
        <IconBlob
          icon={<HeartIcon />}
          title="First One"
          body="At half-past eight the door opened"
        />

        <IconBlob
          icon={<EyeIcon />}
          title="Second One"
          body="At half-past eight the door opened"
        />

        <IconBlob
          icon={<LockIcon />}
          title="Third One"
          body="At half-past eight the door opened"
        />
        <IconBlob
          icon={<SunIcon />}
          title="Fourth One"
          body="At half-past eight the door opened"
        />
      </Grid>
    </Band>

    <Band justify="center">
      <H2 align="center">Key Modules</H2>
    </Band>
    <Band>
      <AsideImage />
      <AsideText order="01">
        <H3 gutterBottom>The Basic Notes App - UI</H3>
        <P gutterBottom>
          The notes app is structured as you would expect for a redux based
          React app. For example, the screen to edit a note is in the Note
          module directory `src/modules/notes/EditNotesScreen.js`. The same
          directory contains reducers and selectors providing the business logic
          for managing apps.
        </P>
        <P gutterBottom>
          For quick reference, the source code follows these patterns (under
          src/).
        </P>
        <P>[Figure out to format src]</P>
      </AsideText>
    </Band>

    <Band>
      <AsideText order="02">
        <H3 gutterBottom>The Vault</H3>
        <P gutterBottom>The repo for The Vault is.</P>
        <P gutterBottom>
          The code for the service lives in the following files in the repo.
        </P>
        <P gutterBottom>
          [Modsquad] What if you circumvented the encryption and sent the file
          directly to the Vault. You would then have an easy of sharing the file
          simply by giving recipients the IPFS locations.
        </P>
        <P gutterBottom>
          [Modsquad] Ways to handle the location array (or when it is ok to
          centralize). We did it this way...but there are many other ways. Here
          are a few.
        </P>
        <P>[Figure out to format src]</P>
      </AsideText>
      <AsideImage />
    </Band>

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
          device
        </P>
      </InfoText>
    </Band>

    <Band>
      <AsideImage />
      <AsideText order="03">
        <H3 gutterBottom>The Notary</H3>
        <P gutterBottom>
          The Notary service handles the hashing of user notes onto a
          blockchain, preferably a mainnet like Ethereum’s, so that there is a
          solid chance of long-term continuity and strong tamper-resistance.
        </P>
        <P gutterBottom>
          If we were doing this all over again, we’d probably make the Notary
          library stand apart, or use something like Chainpoint but here’s what
          we have:
        </P>
        <P gutterBottom>
          A Smart Contract is responsible for storing the note’s hash and
          timestamp. (We’ve provided the address of the living contract that we
          wrote onto the Ethereum Rinkeby testnet for demonstration).
        </P>
        <P gutterBottom>
          At the user’s request, we use Web3.js in the note app that calls the
          Notary function on the smart contract.
        </P>
      </AsideText>
    </Band>

    <Band>
      <AsideText order="04">
        <H3 gutterBottom>Authentication & Wallet</H3>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </P>
      </AsideText>
      <AsideImage />
    </Band>
  </article>
);

export default Index;
