from sqlalchemy import Column, Integer, String, ForeignKey, Table, DECIMAL, TIMESTAMP
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy_serializer import SerializerMixin

Base = declarative_base()

# One-to-One: Each Donor and Organization corresponds to one User
# Many-to-Many: Donations can be made to many Organizations, Donors can make many Donations

# One-to-One:  An Organization can belong to one Cause
# One-to-Many: An Organization can receive many Donations

# One-to-Many: A cause can have many Organizations
# One-to-Many: A cause can have many Donors

class User(Base, SerializerMixin):
    __tablename__ = 'Users'
    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(128))
    role = Column(String(50))

    donors = relationship('Donor', back_populates='user')
    organizations = relationship('Organization', back_populates='user')

    serialize_rules = ('-donors.user', '-organizations.user')

class CauseDonorAssociation(Base, SerializerMixin):
    __tablename__ = 'Associations'
    id = Column(Integer, primary_key=True)
    donor_id = Column(Integer, ForeignKey('Donors.DonorID'))
    cause_id = Column(Integer, ForeignKey('Causes.CauseID'))

    donor = relationship("Donor", back_populates="cause_associations")
    cause = relationship("Cause", back_populates="donor_associations")

    serialize_rules = ('-donor.cause_associations', '-cause.donor_associations')

class Donor(Base, SerializerMixin):
    __tablename__ = 'Donors'
    DonorID = Column(Integer, primary_key=True)
    first = Column(String)
    last = Column(String)
    user_id = Column(Integer, ForeignKey('Users.id'))
    user = relationship('User', back_populates='donors')
    

    donations = relationship("Donation", back_populates="donor")
    cause_associations = relationship("CauseDonorAssociation", back_populates="donor")

    serialize_rules = ('-donations.donor', '-cause_associations.donor')

class Organization(Base, SerializerMixin):
    __tablename__ = 'Organizations'
    OrganizationID = Column(Integer, primary_key=True)
    name = Column(String)
    imageurl = Column(String)
    about = Column(String)
    user_id = Column(Integer, ForeignKey('Users.id'))
    user = relationship('User', back_populates='organizations')

    cause_id = Column(Integer, ForeignKey('Causes.CauseID'))
    cause = relationship("Cause", back_populates="organizations")
    donations = relationship("Donation", back_populates="organization")

    serialize_rules = ('-cause.organizations', '-donations.organization') 

class Cause(Base, SerializerMixin):
    __tablename__ = 'Causes'
    CauseID = Column(Integer, primary_key=True)
    cause = Column(String)
    name = Column(String)

    organizations = relationship("Organization", back_populates="cause")
    donor_associations = relationship("CauseDonorAssociation", back_populates="cause")

    serialize_rules = ('-organizations.cause', '-donor_associations.cause')

class Donation(Base, SerializerMixin):
    __tablename__ = 'Donations'
    DonationID = Column(Integer, primary_key=True)
    amount = Column(DECIMAL)
    timestamp = Column(TIMESTAMP)

    donor_id = Column(Integer, ForeignKey('Donors.DonorID'))
    organization_id = Column(Integer, ForeignKey('Organizations.OrganizationID'))
    donor = relationship("Donor", back_populates="donations")
    organization = relationship("Organization", back_populates="donations")

    serialize_rules = ('-donor.donations', '-organization.donations')