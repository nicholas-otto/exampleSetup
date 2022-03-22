// admin/pages/custom-page.tsx
/** @jsxRuntime classic */
/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { Heading } from '@keystone-ui/core';

export default function CustomPage () {
    return (
        <PageContainer
            header={(
                <Heading type="h3">
                    Custom Page
                </Heading>
            )}>
            <h1 css={{
                width: '100%',
                textAlign: 'center',
            }}>
                This is a custom Admin UI Page
            </h1>
            <p css={{ textAlign: 'center' }}>
                It can be accessed via the route <a href="/custom-page">/custom-page</a>
            </p>
        </PageContainer>
    )
}
