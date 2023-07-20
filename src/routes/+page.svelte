<script lang="ts">
  import SectionContainer from '../components/SectionContainer.svelte';
  import Popup from '../components/Popup.svelte';
  import HeaderSection from '../components/Header/HeaderSection.svelte';
  import AboutSection from '../components/About/AboutSection.svelte';
  import ExperienceSection from '../components/Experience/ExperienceSection.svelte';
  import ExperiencePopup from '../components/Experience/ExperiencePopup.svelte';
  import SkillsSection from '../components/Skills/SkillsSection.svelte';
  import SamplesSection from '../components/Samples/SamplesSection.svelte';
  import SamplesVideoPopup from '../components/Samples/SamplesVideoPopup.svelte';
  import SamplesWebPopup from '../components/Samples/SamplesWebPopup.svelte';
  import EducationSection from '../components/Education/EducationSection.svelte';
  import ContactSection from '../components/Contact/ContactSection.svelte';
  import FooterSection from '../components/Footer/FooterSection.svelte';
  import type { Experience } from '$lib/data/experience';
  import '../app.scss';

  let allSections: HTMLElement[] = [];
  let experience: Experience;

  let experiencePopupOpen = false;
  let samplesVideoPopupOpen = false;
  let samplesWebPopupOpen = false;

  const addSection = (e: CustomEvent) =>
    (allSections = [...allSections, e.detail]);

  const openExperiencePopup = (e: CustomEvent) => {
    experience = e.detail;
    experiencePopupOpen = true;
  };
  const closeExperiencePopup = () => (experiencePopupOpen = false);

  const openSamplesVideoPopup = () => (samplesVideoPopupOpen = true);
  const closeSamplesVideoPopup = () => (samplesVideoPopupOpen = false);

  const openSamplesWebPopup = () => (samplesWebPopupOpen = true);
  const closeSamplesWebPopup = () => (samplesWebPopupOpen = false);
</script>

<svelte:head>
  <title>David Frisk | FriskyPixel</title>
  <meta
    name="description"
    content="This is the landing page of David Frisk, video editor and web developer."
  />
</svelte:head>

<HeaderSection {allSections} />

<SectionContainer section="about" on:addSection={addSection}>
  <AboutSection />
</SectionContainer>

<SectionContainer section="experience" on:addSection={addSection}>
  <ExperienceSection on:openExperiencePopup={openExperiencePopup} />
</SectionContainer>

{#if experiencePopupOpen}
  <Popup on:closePopup={closeExperiencePopup}>
    <ExperiencePopup {experience} />
  </Popup>
{/if}

<SectionContainer section="skills" on:addSection={addSection}>
  <SkillsSection />
</SectionContainer>

<SectionContainer section="samples" on:addSection={addSection}>
  <SamplesSection
    on:openSamplesVideoPopup={openSamplesVideoPopup}
    on:openSamplesWebPopup={openSamplesWebPopup}
  />
</SectionContainer>

{#if samplesVideoPopupOpen}
  <Popup on:closePopup={closeSamplesVideoPopup}>
    <SamplesVideoPopup />
  </Popup>
{/if}

{#if samplesWebPopupOpen}
  <Popup on:closePopup={closeSamplesWebPopup}>
    <SamplesWebPopup />
  </Popup>
{/if}

<SectionContainer section="education" on:addSection={addSection}>
  <EducationSection />
</SectionContainer>

<SectionContainer section="contact" on:addSection={addSection}>
  <ContactSection />
</SectionContainer>

<FooterSection />
