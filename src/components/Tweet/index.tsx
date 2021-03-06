import React from 'react';

import {
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
              Você retweetou
          </Retweeted>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Vinícius Rocha</strong>
                        <span>@virocha_</span>
                        <Dot />
                        <time>15 de nov</time>
                    </Header>

                    <Description>Já chegou o disco voador</Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                                36
                            </Status>
                        <Status>
                            <RetweetIcon />
                                36
                            </Status>
                        <Status>
                            <LikeIcon />
                                36
                            </Status>
                    </Icons>
                </Content>
            </Body>

        </Container>
    );
}

export default Tweet;