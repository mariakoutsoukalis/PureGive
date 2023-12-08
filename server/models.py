from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Table, DECIMAL, TIMESTAMP
from sqlalchemy.orm import declarative_base, relationship
from postgres_config import DATABASE_URI

Base = declarative_base()

# Many-to-Many association tables
donor_cause_association = Table(
    'donor_cause_association', Base.metadata,
    Column('donor_id', Integer, ForeignKey('Donors.DonorID')),
    Column('cause_id', Integer, ForeignKey('Causes.CauseID'))
)

#Define classes after the association tables
class Donors(Base):
    __tablename__ = 'Donors'
    DonorID = Column(Integer, primary_key=True)
    first = Column(String)
    last = Column(String)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    # Relationship defined later to avoid forward reference

class Organizations(Base):
    __tablename__ = 'Organizations'
    OrganizationID = Column(Integer, primary_key=True)
    name = Column(String)
    about = Column(String)
    imageurl = Column(String)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    # Relationships defined later to avoid forward reference

class Causes(Base):
    __tablename__ = 'Causes'
    CauseID = Column(Integer, primary_key=True)
    Name = Column(String)
    OrganizationID = Column(Integer, ForeignKey('Organizations.OrganizationID'))
    organization = relationship('Organizations', back_populates='causes')
    # Relationship defined later to avoid forward reference


# Define relationships here to avoid forward references
Donors.donations = relationship('Donations', back_populates='donor')
Organizations.donations = relationship('Donations', back_populates='organization')
Organizations.causes = relationship('Causes', back_populates='organization')
Causes.donors = relationship('Donors', secondary=donor_cause_association, back_populates='causes')


# Model may be replaced
# class Donations(Base):
#     __tablename__ = 'Donations'
#     DonationID = Column(Integer, primary_key=True)
#     DonorID = Column(Integer, ForeignKey('Donors.DonorID'))
#     OrganizationID = Column(Integer, ForeignKey('Organizations.OrganizationID'))
#     Amount = Column(DECIMAL(10, 2), nullable=False)
#     Date = Column(TIMESTAMP, nullable=False, default=func.current_timestamp())
#     donor = relationship('Donors', back_populates='donations')
#     organization = relationship('Organizations', back_populates='donations')

# Engine setup (update with your database connection string)
engine = create_engine(DATABASE_URI)
Base.metadata.create_all(engine)