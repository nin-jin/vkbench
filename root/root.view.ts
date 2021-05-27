namespace $.$$ {
	
	export class $my_vkbench_root extends $.$my_vkbench_root {
		
		section() {
			return this.$.$mol_state_arg.value( 'section' ) as
			| null | 'default' | 'burn' | 'modals'
		}
		
		@ $mol_mem
		pages() {
			return [
				this.Menu(),
				... this.section() === 'burn' ? this.Burn().pages() : [],
				... this.section() === 'modals' ? this.Modals().pages() : [],
			]
		}
		
	}
	
}
