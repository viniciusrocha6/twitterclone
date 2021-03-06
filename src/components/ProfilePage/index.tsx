import React from 'react';

import Feed from '../Feed';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
 } from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Vinícius Rocha</h1>
                <h2>@viniciusrocha</h2>

                <p>
                    Developer at <a href='google.com'>@AutBank</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 9 de abril de 1990
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>100</strong>
                    </span>
                    <span>
                        <strong>550 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    );
}

export default ProfilePage;