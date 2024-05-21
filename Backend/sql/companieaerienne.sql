-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 21 mai 2024 à 12:58
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `companieaerienne`
--

-- --------------------------------------------------------

--
-- Structure de la table `appareil`
--

CREATE TABLE `appareil` (
  `numeroIdentification` int(11) NOT NULL,
  `type` varchar(99) DEFAULT NULL,
  `nombreDePassager` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `billet`
--

CREATE TABLE `billet` (
  `numeroBillet` int(11) NOT NULL,
  `dateEmission` date DEFAULT NULL,
  `prix` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `idClient` int(11) NOT NULL,
  `nom` varchar(99) DEFAULT NULL,
  `prenom` varchar(99) DEFAULT NULL,
  `adresse` varchar(99) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `depart`
--

CREATE TABLE `depart` (
  `numeroDepart` int(11) NOT NULL,
  `dateDepart` date DEFAULT NULL,
  `nombrePlace` int(11) DEFAULT NULL,
  `numeroVol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `employe`
--

CREATE TABLE `employe` (
  `numeroSecu` int(11) NOT NULL,
  `nom` varchar(99) DEFAULT NULL,
  `prenom` varchar(99) DEFAULT NULL,
  `adresse` varchar(99) DEFAULT NULL,
  `salaire` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `employesol`
--

CREATE TABLE `employesol` (
  `numeroSecu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `liaison`
--

CREATE TABLE `liaison` (
  `numeroLiaison` int(11) NOT NULL,
  `villeOrigine` varchar(99) DEFAULT NULL,
  `villeDestination` varchar(99) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `membreequipage`
--

CREATE TABLE `membreequipage` (
  `numeroSecu` int(11) NOT NULL,
  `fonction` varchar(99) DEFAULT NULL,
  `numeroDepart` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `passager`
--

CREATE TABLE `passager` (
  `numeroPassager` int(11) NOT NULL,
  `nom` varchar(99) DEFAULT NULL,
  `prenom` varchar(99) DEFAULT NULL,
  `adresse` varchar(99) DEFAULT NULL,
  `profession` varchar(20) DEFAULT NULL,
  `banque` varchar(99) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personnelnavigant`
--

CREATE TABLE `personnelnavigant` (
  `numeroSecu` int(11) NOT NULL,
  `heureVol` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pilot`
--

CREATE TABLE `pilot` (
  `numeroSecu` int(11) NOT NULL,
  `numeroLicence` int(11) DEFAULT NULL,
  `numeroDepart` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `prendre`
--

CREATE TABLE `prendre` (
  `numeroPassager` int(11) NOT NULL,
  `numeroVol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reserver`
--

CREATE TABLE `reserver` (
  `idClient` int(11) NOT NULL,
  `numeroBillet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `vol`
--

CREATE TABLE `vol` (
  `numeroVol` int(11) NOT NULL,
  `dateValidation` date DEFAULT NULL,
  `heureDepart` date DEFAULT NULL,
  `heureArrivee` date DEFAULT NULL,
  `numeroIdentification` int(11) DEFAULT NULL,
  `numeroLiaison` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `appareil`
--
ALTER TABLE `appareil`
  ADD PRIMARY KEY (`numeroIdentification`);

--
-- Index pour la table `billet`
--
ALTER TABLE `billet`
  ADD PRIMARY KEY (`numeroBillet`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`idClient`);

--
-- Index pour la table `depart`
--
ALTER TABLE `depart`
  ADD PRIMARY KEY (`numeroDepart`),
  ADD KEY `numeroVol` (`numeroVol`);

--
-- Index pour la table `employe`
--
ALTER TABLE `employe`
  ADD PRIMARY KEY (`numeroSecu`);

--
-- Index pour la table `employesol`
--
ALTER TABLE `employesol`
  ADD PRIMARY KEY (`numeroSecu`);

--
-- Index pour la table `liaison`
--
ALTER TABLE `liaison`
  ADD PRIMARY KEY (`numeroLiaison`);

--
-- Index pour la table `membreequipage`
--
ALTER TABLE `membreequipage`
  ADD PRIMARY KEY (`numeroSecu`),
  ADD KEY `numeroDepart` (`numeroDepart`);

--
-- Index pour la table `passager`
--
ALTER TABLE `passager`
  ADD PRIMARY KEY (`numeroPassager`);

--
-- Index pour la table `personnelnavigant`
--
ALTER TABLE `personnelnavigant`
  ADD PRIMARY KEY (`numeroSecu`);

--
-- Index pour la table `pilot`
--
ALTER TABLE `pilot`
  ADD PRIMARY KEY (`numeroSecu`),
  ADD KEY `numeroDepart` (`numeroDepart`);

--
-- Index pour la table `prendre`
--
ALTER TABLE `prendre`
  ADD PRIMARY KEY (`numeroPassager`,`numeroVol`),
  ADD KEY `numeroVol` (`numeroVol`);

--
-- Index pour la table `reserver`
--
ALTER TABLE `reserver`
  ADD PRIMARY KEY (`idClient`,`numeroBillet`),
  ADD KEY `numeroBillet` (`numeroBillet`);

--
-- Index pour la table `vol`
--
ALTER TABLE `vol`
  ADD PRIMARY KEY (`numeroVol`),
  ADD KEY `numeroIdentification` (`numeroIdentification`),
  ADD KEY `numeroLiaison` (`numeroLiaison`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `depart`
--
ALTER TABLE `depart`
  ADD CONSTRAINT `depart_ibfk_1` FOREIGN KEY (`numeroVol`) REFERENCES `vol` (`numeroVol`);

--
-- Contraintes pour la table `membreequipage`
--
ALTER TABLE `membreequipage`
  ADD CONSTRAINT `membreequipage_ibfk_1` FOREIGN KEY (`numeroDepart`) REFERENCES `depart` (`numeroDepart`);

--
-- Contraintes pour la table `pilot`
--
ALTER TABLE `pilot`
  ADD CONSTRAINT `pilot_ibfk_1` FOREIGN KEY (`numeroDepart`) REFERENCES `depart` (`numeroDepart`);

--
-- Contraintes pour la table `prendre`
--
ALTER TABLE `prendre`
  ADD CONSTRAINT `prendre_ibfk_1` FOREIGN KEY (`numeroPassager`) REFERENCES `passager` (`numeroPassager`),
  ADD CONSTRAINT `prendre_ibfk_2` FOREIGN KEY (`numeroVol`) REFERENCES `vol` (`numeroVol`);

--
-- Contraintes pour la table `reserver`
--
ALTER TABLE `reserver`
  ADD CONSTRAINT `reserver_ibfk_1` FOREIGN KEY (`idClient`) REFERENCES `client` (`idClient`),
  ADD CONSTRAINT `reserver_ibfk_2` FOREIGN KEY (`numeroBillet`) REFERENCES `billet` (`numeroBillet`);

--
-- Contraintes pour la table `vol`
--
ALTER TABLE `vol`
  ADD CONSTRAINT `vol_ibfk_1` FOREIGN KEY (`numeroIdentification`) REFERENCES `appareil` (`numeroIdentification`),
  ADD CONSTRAINT `vol_ibfk_2` FOREIGN KEY (`numeroLiaison`) REFERENCES `liaison` (`numeroLiaison`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
