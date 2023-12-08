CREATE TABLE Donors (
    DonorID INTEGER PRIMARY KEY,
    first VARCHAR,
    last VARCHAR,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL
);

CREATE TABLE Organizations (
    OrganizationID INTEGER PRIMARY KEY,
    name VARCHAR,
    about VARCHAR,
    imageurl VARCHAR,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL
);

CREATE TABLE Causes (
    CauseID INTEGER PRIMARY KEY,
    name VARCHAR,
    OrganizationID INTEGER,
    FOREIGN KEY (OrganizationID) REFERENCES Organizations(OrganizationID)
);

CREATE TABLE donor_cause_association (
    donor_id INTEGER,
    cause_id INTEGER,
    FOREIGN KEY (donor_id) REFERENCES Donors(DonorID),
    FOREIGN KEY (cause_id) REFERENCES Causes(CauseID)
);

CREATE TABLE Donations (
    DonationID INTEGER PRIMARY KEY,
    DonorID INTEGER,
    OrganizationID INTEGER,
    Amount DECIMAL(10, 2) NOT NULL,
    Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (DonorID) REFERENCES Donors(DonorID),
    FOREIGN KEY (OrganizationID) REFERENCES Organizations(OrganizationID)
);