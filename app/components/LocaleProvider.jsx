"use client";

import { createContext, useContext, useMemo, useState } from "react";

const COPY = {
  en: {
    nav: {
      how: "How it works",
      services: "Services",
      cities: "Cities",
      download: "Download app",
    },
    hero: {
      eyebrow: "Rabat · Always with you",
      titleTop: "More services.",
      titleBottom: "Lower prices.",
      body: "At your door in minutes: sweeping, mopping, dusting, and regular visits, all in one tap.",
      link: "Book in 1 tap",
      appStoreTop: "Download on the",
      playTop: "Get it on",
      nextSlot: "Next slot",
      under30: "Under 30 min",
      live: "Live",
      service: "Service",
      serviceValue: "Pro cleaning",
      team: "Team",
      teamValue: "Pro team",
      checklist: "Checklist",
      oneTap: "1 tap",
      price: "From 490 MAD/month",
      proof: [
        { value: "30 min", label: "Arrival goal" },
        { value: "1 tap", label: "Booking flow" },
        { value: "490 MAD", label: "Monthly from" },
      ],
    },
    problem: {
      eyebrow: "Why Brocli exists",
      title: "Home cleaning should feel predictable.",
      body: "Customers should not manage trust, timing, price, and quality alone. Brocli turns the whole visit into one clear app experience.",
      items: [
        ["The search starts in chat", "Most bookings still depend on referrals, screenshots, and a cleaner who may or may not be free."],
        ["The price is negotiated late", "A simple cleaning visit becomes a back-and-forth about scope, timing, and what is included."],
        ["The visit is hard to coordinate", "Confirming arrival, sharing the address, and handling changes all sit outside one clear flow."],
        ["The standard varies", "Different cleaners bring different expectations. There is rarely a checklist or review loop."],
      ],
    },
    coverage: {
      eyebrow: "Coverage",
      title: "Rabat is live.",
      titleSecond: "Morocco is next.",
      body: "Brocli starts in Rabat with controlled zones, trained teams, and reliable booking windows before expanding city by city.",
      active: "Active now",
      coming: "Coming soon",
      cta: "Download the app",
      proof: [
        "Active Rabat coverage",
        "Verified cleaning agents",
        "Same-day windows when supply is available",
        "Standardized cleaning checklists",
        "City-by-city Morocco expansion",
      ],
      live: "LIVE",
    },
    services: {
      eyebrow: "Services · Rabat",
      title: "Cleaning services available now.",
      cta: "Available in the Brocli app",
      ideal: "Ideal for",
      items: [
        {
          name: "Express reset",
          tagline: "Fast visible clean.",
          description: "A focused clean covering high-traffic areas: kitchen surfaces, bathroom, floors, and general tidying. Done in under two hours.",
          ideal: "After guests, before a meeting, or when you need a fast reset.",
          availability: "Same day · 2-3 hrs",
        },
        {
          name: "Standard clean",
          tagline: "The complete home clean.",
          description: "A full room-by-room clean following Brocli's standardized checklist. Every surface, every corner, consistent every time.",
          ideal: "Weekly or bi-weekly home maintenance.",
          availability: "Scheduled · 3-5 hrs",
        },
        {
          name: "Monthly care",
          tagline: "Deep clean on a fixed schedule.",
          description: "A thorough clean including harder-to-reach areas, inside appliances, and detailed surface work. Priced at a flat monthly rate.",
          ideal: "Households that want a guaranteed standard without repeat booking.",
          availability: "Monthly plan · 4-6 hrs",
        },
      ],
    },
    solution: {
      eyebrow: "How Brocli works",
      title: "Book, track, relax.",
      body: "The app keeps price, schedule, team, and checklist in one place.",
      statOne: "Fixed",
      statOneBody: "Pricing shown first",
      statTwo: "Rated",
      statTwoBody: "Every completed job",
      active: "Active in Rabat",
      next: "Coming soon across Morocco",
      steps: [
        ["Choose the service", "Pick express, standard, or monthly care with the scope shown before booking."],
        ["Confirm the slot", "See available Rabat windows, price, duration, and address details in one flow."],
        ["Track the visit", "Your assigned agent follows the same checklist and the visit is reviewed after completion."],
        ["Keep the standard", "Ratings, support, and recurring plans help the service improve without more coordination."],
      ],
    },
    final: {
      eyebrow: "Brocli · Always with you",
      title: "Book your next cleaning.",
      body: "Verified agents, clear service scope, and app-managed visits for homes that need dependable cleaning without extra calls.",
      left: "Rabat now · Morocco next",
      right: "Trusted cleaning · Standardized",
    },
  },
  fr: {
    nav: {
      how: "Comment ca marche",
      services: "Services",
      cities: "Villes",
      download: "Telecharger",
    },
    hero: {
      eyebrow: "Rabat · ديما معاك",
      titleTop: "Plus de services.",
      titleBottom: "Moins cher.",
      body: "Chez vous en quelques minutes: balayage, lavage, depoussierage et passages reguliers, tout ca en un clic.",
      link: "Reservez en 1 clic",
      appStoreTop: "Telecharger sur",
      playTop: "Disponible sur",
      nextSlot: "Prochain creneau",
      under30: "Moins de 30 min",
      live: "Live",
      service: "Service",
      serviceValue: "Menage pro",
      team: "Equipe",
      teamValue: "Equipe pro",
      checklist: "Checklist",
      oneTap: "1 clic",
      price: "A partir de 490 MAD/mois",
      proof: [
        { value: "30 min", label: "Objectif d'arrivee" },
        { value: "1 clic", label: "Reservation" },
        { value: "490 MAD", label: "Abonnement des" },
      ],
    },
    problem: {
      eyebrow: "Pourquoi Brocli",
      title: "Le menage doit etre simple.",
      body: "Vous ne devriez pas gerer seul la confiance, le prix, le timing et la qualite. Brocli transforme toute la visite en experience claire dans l'app.",
      items: [
        ["La recherche commence sur WhatsApp", "La plupart des reservations dependent encore des recommandations, captures d'ecran et disponibilites incertaines."],
        ["Le prix se negocie trop tard", "Une visite simple devient un aller-retour sur le prix, le temps et ce qui est inclus."],
        ["La coordination est difficile", "Confirmer l'arrivee, partager l'adresse et gerer les changements se fait rarement dans un seul flux."],
        ["Le standard change", "Chaque prestataire a ses habitudes. Il manque souvent une checklist et un retour qualite."],
      ],
    },
    coverage: {
      eyebrow: "Couverture",
      title: "Rabat est disponible.",
      titleSecond: "Le Maroc arrive.",
      body: "Brocli commence a Rabat avec des zones controlees, des equipes formees et des creneaux fiables avant une expansion ville par ville.",
      active: "Disponible",
      coming: "Bientot",
      cta: "Telecharger l'app",
      proof: [
        "Couverture active a Rabat",
        "Agents de menage verifies",
        "Creneaux le jour meme selon disponibilite",
        "Checklists de menage standardisees",
        "Expansion ville par ville au Maroc",
      ],
      live: "LIVE",
    },
    services: {
      eyebrow: "Services · Rabat",
      title: "Services menage disponibles.",
      cta: "Disponible dans l'app Brocli",
      ideal: "Ideal pour",
      items: [
        {
          name: "Reset express",
          tagline: "Nettoyage visible et rapide.",
          description: "Un nettoyage cible des zones les plus utilisees: cuisine, salle de bain, sols et rangement general. Termine en moins de deux heures.",
          ideal: "Apres des invites, avant une reunion, ou quand il faut repartir vite sur une base propre.",
          availability: "Jour meme · 2-3 h",
        },
        {
          name: "Menage standard",
          tagline: "Le nettoyage complet de la maison.",
          description: "Un nettoyage piece par piece selon la checklist Brocli. Chaque surface, chaque coin, avec le meme standard.",
          ideal: "Entretien hebdomadaire ou toutes les deux semaines.",
          availability: "Planifie · 3-5 h",
        },
        {
          name: "Abonnement mensuel",
          tagline: "Grand nettoyage sur calendrier fixe.",
          description: "Un nettoyage approfondi avec zones difficiles, interieur des appareils et details de surface, avec un tarif mensuel clair.",
          ideal: "Foyers qui veulent un standard garanti sans reserver a chaque fois.",
          availability: "Mensuel · 4-6 h",
        },
      ],
    },
    solution: {
      eyebrow: "Comment ca marche",
      title: "Reservez, suivez, respirez.",
      body: "L'app centralise le prix, le creneau, l'equipe et la checklist.",
      statOne: "Fixe",
      statOneBody: "Prix affiche avant reservation",
      statTwo: "Note",
      statTwoBody: "Apres chaque visite",
      active: "Disponible a Rabat",
      next: "Bientot partout au Maroc",
      steps: [
        ["Choisissez le service", "Selectionnez express, standard ou mensuel avec le perimetre affiche avant reservation."],
        ["Confirmez le creneau", "Consultez les disponibilites a Rabat, le prix, la duree et l'adresse dans un seul flux."],
        ["Suivez la visite", "L'agent assigne suit la meme checklist et la visite est evaluee apres completion."],
        ["Gardez le standard", "Notes, support et abonnements recurrents ameliorent le service sans coordination en plus."],
      ],
    },
    final: {
      eyebrow: "Brocli · ديما معاك",
      title: "Reservez votre prochain menage.",
      body: "Agents verifies, services clairs et visites gerees depuis l'app pour un menage fiable, sans appels en plus.",
      left: "Rabat maintenant · Maroc ensuite",
      right: "Menage fiable · Standardise",
    },
  },
};

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("en");
  const value = useMemo(() => ({ locale, setLocale, t: COPY[locale] }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }

  return context;
}
