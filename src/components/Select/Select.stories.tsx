import { Story } from '@storybook/react'
import React from 'react'

import { Select } from '../../components'
import SelectProps from './Select.types'

import { ReactComponent as Andorra } from '../../assets/Flags/AD.svg'
import { ReactComponent as UnitedArabEmirates } from '../../assets/Flags/AE.svg'
import { ReactComponent as Afghanistan } from '../../assets/Flags/AF.svg'
import { ReactComponent as AntiguaAndBarbuda } from '../../assets/Flags/AG.svg'
import { ReactComponent as Albania } from '../../assets/Flags/AL.svg'
import { ReactComponent as Armenia } from '../../assets/Flags/AM.svg'
import { ReactComponent as NetherlandsAntilles } from '../../assets/Flags/AN.svg'
import { ReactComponent as Angola } from '../../assets/Flags/AO.svg'
import { ReactComponent as Argentina } from '../../assets/Flags/AR.svg'
import { ReactComponent as Austria } from '../../assets/Flags/AT.svg'
import { ReactComponent as Australia } from '../../assets/Flags/AU.svg'
import { ReactComponent as Aruba } from '../../assets/Flags/AW.svg'
import { ReactComponent as Azerbaijan } from '../../assets/Flags/AZ.svg'
import { ReactComponent as BosniaAndHerzegovina } from '../../assets/Flags/BA.svg'
import { ReactComponent as Barbados } from '../../assets/Flags/BB.svg'
import { ReactComponent as Bangladesh } from '../../assets/Flags/BD.svg'
import { ReactComponent as Belgium } from '../../assets/Flags/BE.svg'
import { ReactComponent as BurkinaFaso } from '../../assets/Flags/BF.svg'
import { ReactComponent as Bulgaria } from '../../assets/Flags/BG.svg'
import { ReactComponent as TheBahamas } from '../../assets/Flags/BH.svg'
import { ReactComponent as Burundi } from '../../assets/Flags/BI.svg'
import { ReactComponent as Benin } from '../../assets/Flags/BJ.svg'
import { ReactComponent as Brunei } from '../../assets/Flags/BN.svg'
import { ReactComponent as Bolivia } from '../../assets/Flags/BO.svg'
import { ReactComponent as Brazil } from '../../assets/Flags/BR.svg'
import { ReactComponent as Bahrain } from '../../assets/Flags/BS.svg'
import { ReactComponent as Bhutan } from '../../assets/Flags/BT.svg'
import { ReactComponent as BouvetIsland } from '../../assets/Flags/BV.svg'
import { ReactComponent as Botswana } from '../../assets/Flags/BW.svg'
import { ReactComponent as Belarus } from '../../assets/Flags/BY.svg'
import { ReactComponent as Belize } from '../../assets/Flags/BZ.svg'
import { ReactComponent as Canada } from '../../assets/Flags/CA.svg'
import { ReactComponent as DemocraticRepublicOfTheCongo } from '../../assets/Flags/CD.svg'
import { ReactComponent as CentralAfricanRepublic } from '../../assets/Flags/CF.svg'
import { ReactComponent as RepublicOfTheCongo } from '../../assets/Flags/CG.svg'
import { ReactComponent as Switzerland } from '../../assets/Flags/CH.svg'
import { ReactComponent as CoteDIvoire } from '../../assets/Flags/CI.svg' // mark
import { ReactComponent as Chile } from '../../assets/Flags/CL.svg'
import { ReactComponent as Cameroon } from '../../assets/Flags/CM.svg'
import { ReactComponent as China } from '../../assets/Flags/CN.svg'
import { ReactComponent as Colombia } from '../../assets/Flags/CO.svg'
import { ReactComponent as CostaRica } from '../../assets/Flags/CR.svg'
import { ReactComponent as Cuba } from '../../assets/Flags/CU.svg'
import { ReactComponent as CapeVerde } from '../../assets/Flags/CV.svg'
import { ReactComponent as Curacao } from '../../assets/Flags/CW.svg' // mark
import { ReactComponent as Cyprus } from '../../assets/Flags/CY.svg'
import { ReactComponent as TheCzechRepublic } from '../../assets/Flags/CZ.svg'
import { ReactComponent as Germany } from '../../assets/Flags/DE.svg'
import { ReactComponent as Djibouti } from '../../assets/Flags/DJ.svg'
import { ReactComponent as Denmark } from '../../assets/Flags/DK.svg'
import { ReactComponent as Dominica } from '../../assets/Flags/DM.svg'

import { ReactComponent as Norway } from '../../assets/Flags/NO.svg'
import { ReactComponent as UnitedStates } from '../../assets/Flags/US.svg'
import { ReactComponent as Sweden } from '../../assets/Flags/SE.svg'

export default {
  title: 'Select',
}

const SelectStory: Story<SelectProps> = args => (
  <Select
    multiple
    status={{
      type: 'error',
      message: 'Must select one',
    }}
    size="small"
    label="Country"
    style={{ width: '18rem' }}
    onSelectionChange={selected => {
      console.log(selected)
    }}
    {...args}
  >
    <Select.Option disabled leftIcon={<UnitedStates />} value="us">
      United States
    </Select.Option>

    <Select.Group title="Europe">
      <Select.Option leftIcon={<Norway />} value="no">
        Norway
      </Select.Option>
      <Select.Option disabled={true} leftIcon={<Sweden />} value="se">
        Sweden
      </Select.Option>
      <Select.Option leftIcon={<Albania />} value="al">
        Albania
      </Select.Option>
      <Select.Option leftIcon={<Austria />} value="at">
        Austria
      </Select.Option>
      <Select.Option leftIcon={<BosniaAndHerzegovina />} value="ba">
        Bosnia And Herzegovina
      </Select.Option>
    </Select.Group>

    <Select.Group title="Asia">
      <Select.Option leftIcon={<UnitedArabEmirates />} value="ae">
        United Arab Emirates
      </Select.Option>
      <Select.Option leftIcon={<Afghanistan />} value="af">
        Afghanistan
      </Select.Option>
      <Select.Option leftIcon={<Armenia />} value="am">
        Armenia
      </Select.Option>
      <Select.Option leftIcon={<Azerbaijan />} value="az">
        Azerbaijan
      </Select.Option>
      <Select.Option leftIcon={<Bangladesh />} value="bd">
        Bangladesh
      </Select.Option>
    </Select.Group>

    <Select.Option leftIcon={<Andorra />} value="ad">
      Andorra
    </Select.Option>
    <Select.Option leftIcon={<AntiguaAndBarbuda />} value="ag">
      Antigua And Barbuda
    </Select.Option>

    <Select.Option leftIcon={<NetherlandsAntilles />} value="an">
      Netherlands Antilles
    </Select.Option>
    <Select.Option leftIcon={<Angola />} value="ao">
      Angola
    </Select.Option>
    <Select.Option leftIcon={<Argentina />} value="ar">
      Argentina
    </Select.Option>

    <Select.Option leftIcon={<Australia />} value="au">
      Australia
    </Select.Option>
    <Select.Option leftIcon={<Aruba />} value="aw">
      Aruba
    </Select.Option>

    <Select.Option leftIcon={<Barbados />} value="bb">
      Barbados
    </Select.Option>
    <Select.Option value="be" leftIcon={<Belgium />}>
      Belgium
    </Select.Option>
    <Select.Option value="bf" leftIcon={<BurkinaFaso />}>
      Burkina Faso
    </Select.Option>
    <Select.Option value="bg" leftIcon={<Bulgaria />}>
      Bulgaria
    </Select.Option>
    <Select.Option value="bh" leftIcon={<TheBahamas />}>
      The Bahamas
    </Select.Option>
    <Select.Option value="bi" leftIcon={<Burundi />}>
      Burundi
    </Select.Option>
  </Select>
)

export const Default = SelectStory.bind({})
