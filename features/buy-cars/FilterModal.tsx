import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/lib/colors';

// Define filter options type
export type FilterOptions = {
  search: string;
  vehicleType: string;
  brands: string[];
  fuelType: string;
  transmission: string;
  country: string;
  minPrice: number;
  maxPrice: number;
};

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: FilterOptions) => void;
};

const FilterModal = ({ visible, onClose, onApply }: FilterModalProps) => {
  // Initialize filter state
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    vehicleType: 'Any',
    brands: [],
    fuelType: 'Any',
    transmission: 'Any',
    country: 'Any',
    minPrice: 0,
    maxPrice: 1000000,
  });

  // Vehicle types
  const vehicleTypes = ['Any', 'Sedan', 'SUV', 'Hatchback', 'Coupe'];
  
  // Brand options
  const brandOptions = ['Mercedes', 'BMW', 'Audi', 'Toyota', 'Honda', 'Ford'];
  
  // Fuel types
  const fuelTypes = ['Any', 'Petrol', 'Diesel', 'Electric', 'Hybrid'];
  
  // Transmission types
  const transmissionTypes = ['Any', 'Automatic', 'Manual'];

  // Handle search input change
  const handleSearchChange = (text: string) => {
    setFilters({ ...filters, search: text });
  };

  // Handle vehicle type selection
  const handleVehicleTypeChange = (type: string) => {
    setFilters({ ...filters, vehicleType: type });
  };

  // Handle brand selection
  const handleBrandToggle = (brand: string) => {
    const updatedBrands = [...filters.brands];
    if (updatedBrands.includes(brand)) {
      // Remove brand if already selected
      const index = updatedBrands.indexOf(brand);
      updatedBrands.splice(index, 1);
    } else {
      // Add brand if not selected
      updatedBrands.push(brand);
    }
    setFilters({ ...filters, brands: updatedBrands });
  };

  // Handle select all brands
  const handleSelectAllBrands = () => {
    if (filters.brands.length === brandOptions.length) {
      // If all brands are selected, deselect all
      setFilters({ ...filters, brands: [] });
    } else {
      // Otherwise, select all brands
      setFilters({ ...filters, brands: [...brandOptions] });
    }
  };

  // Handle fuel type selection
  const handleFuelTypeChange = (type: string) => {
    setFilters({ ...filters, fuelType: type });
  };

  // Handle transmission selection
  const handleTransmissionChange = (type: string) => {
    setFilters({ ...filters, transmission: type });
  };

  // Handle apply filters
  const handleApplyFilters = () => {
    onApply(filters);
  };

  // If not visible, don't render anything
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.filterContainer}>
        {/* Filter Header */}
        <View style={styles.filterHeader}>
          <View style={styles.handleBar}></View>
          <Text style={styles.filterTitle}>Filter</Text>
        </View>
        
        <ScrollView style={styles.filterContent} showsVerticalScrollIndicator={false}>
          {/* Car Make/Model Search */}
          <View style={styles.section}>
            <View style={styles.searchInput}>
              <Ionicons name="search" size={20} color="#999" />
              <TextInput
                placeholder="Car Make/ Model"
                placeholderTextColor="#999"
                style={styles.textInput}
                value={filters.search}
                onChangeText={handleSearchChange}
              />
            </View>
          </View>
          
          {/* Vehicle Type */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Vehicle Type</Text>
            <View style={styles.pillContainer}>
              {vehicleTypes.map((type, index) => (
                <TouchableOpacity 
                  key={index}
                  style={[
                    styles.pill,
                    filters.vehicleType === type && styles.pillSelected
                  ]}
                  onPress={() => handleVehicleTypeChange(type)}
                >
                  <Text style={[
                    styles.pillText,
                    filters.vehicleType === type && styles.pillTextSelected
                  ]}>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          {/* Brands */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Brands</Text>
              <TouchableOpacity onPress={handleSelectAllBrands}>
                <Text style={styles.selectAllText}>
                  {filters.brands.length === brandOptions.length ? 'Deselect All' : 'Select All'}
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.pillContainer}>
              {brandOptions.map((brand, index) => (
                <TouchableOpacity 
                  key={index}
                  style={[
                    styles.pill,
                    filters.brands.includes(brand) && styles.pillSelected
                  ]}
                  onPress={() => handleBrandToggle(brand)}
                >
                  <Text style={[
                    styles.pillText,
                    filters.brands.includes(brand) && styles.pillTextSelected
                  ]}>{brand}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          {/* Fuel Type */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Fuel Type</Text>
            <View style={styles.pillContainer}>
              {fuelTypes.map((type, index) => (
                <TouchableOpacity 
                  key={index}
                  style={[
                    styles.pill,
                    filters.fuelType === type && styles.pillSelected
                  ]}
                  onPress={() => handleFuelTypeChange(type)}
                >
                  <Text style={[
                    styles.pillText,
                    filters.fuelType === type && styles.pillTextSelected
                  ]}>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Transmission */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Transmission</Text>
            <View style={styles.pillContainer}>
              {transmissionTypes.map((type, index) => (
                <TouchableOpacity 
                  key={index}
                  style={[
                    styles.pill,
                    filters.transmission === type && styles.pillSelected
                  ]}
                  onPress={() => handleTransmissionChange(type)}
                >
                  <Text style={[
                    styles.pillText,
                    filters.transmission === type && styles.pillTextSelected
                  ]}>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={onClose}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.applyButton}
              onPress={handleApplyFilters}
            >
              <Text style={{ color: 'white' }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000,
    justifyContent: 'flex-end',
  },
  filterContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: '60%', // Half screen height
  },
  filterHeader: {
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 15,
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
    marginBottom: 10,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterContent: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 44,
  },
  textInput: {
    flex: 1,
    height: 40,
    marginLeft: 8,
  },
  sectionTitle: {
    color: '#666',
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  selectAllText: {
    color: colors.primary,
    fontWeight: '500',
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pill: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  pillSelected: {
    borderColor: colors.primary,
    backgroundColor: `${colors.primary}20`,
  },
  pillText: {
    color: '#666',
  },
  pillTextSelected: {
    color: colors.primary,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginRight: 8,
  },
  applyButton: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginLeft: 8,
  },
});

export default FilterModal;
