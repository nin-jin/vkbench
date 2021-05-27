namespace $.$$ {
	
	export class $my_vkbench_modals extends $.$my_vkbench_modals {
		
		filters() {
			return this.$.$mol_state_arg.value( 'filters' ) !== null
		}
		
		info() {
			return this.$.$mol_state_arg.value( 'info' ) !== null
		}
		
		@ $mol_mem
		pages() {
			return [
				this.Sample(),
				... this.filters() ? [ this.Filters() ] : [],
				... this.info() ? [ this.Info() ] : [],
			]
		}
		
	}
	
}
